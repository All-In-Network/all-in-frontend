import React from 'react'
import { Tab } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import { useWalletDispatch, useWalletState } from '../../hooks/wallet'

function ConnectWallet() {
  const { isConnected, accounts, soulbound } = useWalletState()

  const { extensionSetup, connectRpc } = useWalletDispatch()

  const navigate = useNavigate()

  React.useEffect(() => {
    if (isConnected && accounts?.[0].address) {
      connectRpc()
    }
  }, [accounts, isConnected])

  React.useEffect(() => {
    console.log(soulbound)
    if (!isConnected) return
    const timer = setTimeout(() => {
      if (soulbound.isSoulbound) {
        return navigate('/')
      }
      navigate('/register')
    }, 1500)

    return () => {
      clearTimeout(timer)
    }
  }, [isConnected, navigate, soulbound.isSoulbound])

  return (
    <div className="body d-flex p-0 p-xl-5">
      <div className="container">
        <div className="col-lg-6 d-flex justify-content-center m-auto align-items-center auth-h100">
          <div className="d-flex flex-column">
            <h1>Connect wallet</h1>
            <Tab.Container defaultActiveKey="first">
              <Tab.Content className="tab-content mt-4 mb-3">
                <Tab.Pane
                  className="tab-pane fade "
                  id="Email"
                  eventKey="first"
                >
                  <div className="card">
                    <div className="card-body p-4">
                      <button
                        onClick={extensionSetup}
                        type="submit"
                        className="btn btn-primary text-uppercase py-2 fs-5 w-100 mt-2"
                      >
                        Connect Wallet
                      </button>
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ConnectWallet
