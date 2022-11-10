import { ApiPromise, Keyring, WsProvider } from '@polkadot/api'
import {
  web3Accounts,
  web3Enable,
  web3FromAddress,
} from '@polkadot/extension-dapp'
import React from 'react'
import { BN } from 'bn.js'
import { useNavigate } from 'react-router'
import { config } from '../config'
import {
  WalletDispatchContext,
  WalletStateContext,
} from '../Context/CreateContext/CreateContext'

const keyring = new Keyring({ type: 'sr25519' })

export const useWalletState = () => {
  const state = React.useContext(WalletStateContext)

  if (state === undefined) {
    throw new Error('WalletStateContext cannot be used out of context')
  }
  return state
}

export const useWalletDispatch = () => {
  const dispatch = React.useContext(WalletDispatchContext)
  const state = React.useContext(WalletStateContext)

  if (dispatch === undefined) {
    throw new Error('WalletStateContext cannot be used out of context')
  }

  const setAccounts = payload => {
    dispatch({
      type: 'SET_ACCOUNTS',
      payload,
    })
  }

  const setBalance = ({ totalBalance }) => {
    dispatch({
      type: 'SET_BALANCE',
      payload: { totalBalance },
    })
  }

  const extensionSetup = async () => {
    const extensions = await web3Enable('all-in-network')
    if (extensions.length === 0) {
      return
    }
    const accounts = await web3Accounts()
    setAccounts({ isConnected: true, accounts })
  }

  const setApi = api => {
    dispatch({ type: 'SET_API', payload: { api } })
  }

  const connectRpc = async () => {
    try {
      const provider = new WsProvider(config.PROVIDER_SOCKET)
      const api = await ApiPromise.create({ provider })
      await api.isReady
      setApi(api)

      const allSoulbound = await api?.query.rmrkCore.nfts.entries()

      const isSoulbound = allSoulbound.find(
        ([value, exposure]) =>
          // @ts-ignore
          exposure.toJSON().owner.accountId === state?.accounts?.[0].address
      )

      // @ts-ignore
      const { metadata } = isSoulbound?.[1].toHuman() ?? {}

      dispatch({
        type: 'SET_SOULDBOUND',
        payload: { metadata },
      })
    } catch (error) {
      console.warn('connectRpc error:', error)
    }
  }

  const logout = () => {
    dispatch({ type: 'LOGOUT' })
  }

  return { setAccounts, extensionSetup, connectRpc, logout, setBalance }
}

export const useActions = () => {
  const { api, accounts } = useWalletState()

  const navigate = useNavigate()

  const purchaseSoulbound = async ({ nick }) => {
    try {
      const txs = [
        api?.tx.nftSale.claimSoulbound(),
        api?.tx.nicks.setName(nick),
      ]
      const injector = await web3FromAddress(accounts?.[0].address)

      const unsub = await api?.tx?.utility
        .batch(txs)
        .signAndSend(
          accounts?.[0].address,
          { signer: injector.signer },
          result => {
            if (result.status.isInBlock) {
              console.log(
                `Transaction included at blockHash ${result.status.asInBlock}`
              )
            } else if (result.status.isFinalized) {
              console.log(
                `Transaction finalized at blockHash ${result.status.asFinalized}`
              )
              alert('Transaction success')
              unsub?.()
              navigate('/connect')
            }
          }
        )
    } catch (error) {
      console.warn('purchaseSoulbound error:', error)
    }
  }

  const faucet = async () => {
    try {
      const Bob = keyring.addFromUri('//Bob', { name: 'Bob default' })
      const txHash = await api?.tx.balances
        .transfer(accounts?.[0].address, 2000000000000000)
        .signAndSend(Bob, result => {
          if (result.status.isInBlock) {
            console.log(
              `Transaction included at blockHash ${result.status.asInBlock}`
            )
          } else if (result.status.isFinalized) {
            console.log(
              `Transaction finalized at blockHash ${result.status.asFinalized}`
            )
            alert('Transaction success')
            txHash?.()
          }
        })

      // Show the hash
      console.log(`Submitted with hash ${txHash}`)
    } catch (error) {
      console.log('error faucet:', error)
    }
  }

  const createFundingAccount = async () => {
    setTimeout(async () => {
      const alice = keyring.addFromUri('//Alice', { name: 'alice' })
      const managerIsSet = await api?.query.funding.manager()
      let proxy = ''
      const newAcc = accounts?.[0].address
      // const newAcc = bob.address;
      if (managerIsSet?.toHuman() === alice.address) {
        api?.tx.funding
          .createNewFundingAccount('Any', null, null)
          .signAndSend(alice, ({ events = [], status, txHash }) => {
            if (status.isFinalized) {
              console.log(
                `--New Account created Transaction hash ${txHash.toHex()}`
              )
              // Loop through Vec<EventRecord> to display all events
              events.forEach(({ phase, event: { data, method, section } }) => {
                if (method.toString() === 'AnonymousCreated') {
                  console.log(`${phase}: ${section}.${method}:: ${data}`)
                  proxy = data.toJSON()[0]
                }
              })
            }
          })

        setTimeout(async () => {
          api?.tx.funding
            .registerNewTrador(proxy, newAcc, null)
            .signAndSend(alice, ({ events = [], status, txHash }) => {
              if (status.isFinalized) {
                console.log(
                  `--Trador register transaction hash ${txHash.toHex()}`
                )
                // Loop through Vec<EventRecord> to display all events
                events.forEach(
                  ({ phase, event: { data, method, section } }) => {
                    console.log(`${phase}: ${section}.${method}:: ${data}`)
                  }
                )
              }
            })
        }, 20000)

        setTimeout(async () => {
          console.log(`proxy ACC: ${proxy}`)
          const balance = new BN('1000000000000000')
          api?.tx.balances
            .transfer(proxy, balance)
            .signAndSend(alice, ({ events = [], status, txHash }) => {
              if (status.isFinalized) {
                console.log(
                  `--adding balance to new proxy created Transaction hash ${txHash.toHex()}`
                )
                // Loop through Vec<EventRecord> to display all events
                events.forEach(
                  ({ phase, event: { data, method, section } }) => {
                    console.log(`${phase}: ${section}.${method}:: ${data}`)
                  }
                )
              }
            })
        }, 40000)

        setTimeout(async () => {
          const initialiceExtrinsic = api?.tx.funding.initializeTradorAccount(
            newAcc,
            'NonTransfer',
            null
          )

          setTimeout(async () => {
            const tx_p = api?.tx.proxy.proxy(proxy, null, initialiceExtrinsic)
            await tx_p?.signAsync(alice, { nonce: -1 })
            await tx_p?.send(({ events = [], status, txHash }) => {
              if (status.isFinalized) {
                console.log(
                  `--proxy initialized Transaction hash ${txHash.toHex()}`
                )

                // Loop through Vec<EventRecord> to display all events
                events.forEach(
                  ({ phase, event: { data, method, section } }) => {
                    console.log(`${phase}: ${section}.${method}:: ${data}`)
                  }
                )
                alert('Your account has been created')
                // process.exit(0);
              }
            })
          }, 8000)
        }, 60000)
      }
    }, 10000)
  }

  return { purchaseSoulbound, faucet, createFundingAccount }
}
