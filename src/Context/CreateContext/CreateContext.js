import React from 'react'

export const INITIAL_STATE = {
  isConnected: false,
  soulbound: { isSoulbound: false, metadata: '' },
  accounts: undefined,
  api: undefined,
  totalBalance: 10000,
}

export const WalletStateContext = React.createContext(undefined)

export const WalletDispatchContext = React.createContext(undefined)

export const WalletProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(walletReducer, INITIAL_STATE)

  return (
    <WalletStateContext.Provider value={state}>
      <WalletDispatchContext.Provider value={dispatch}>
        {children}
      </WalletDispatchContext.Provider>
    </WalletStateContext.Provider>
  )
}

function walletReducer(state, action) {
  const { type, payload } = action
  switch (type) {
    case 'SET_ACCOUNTS':
      return {
        ...state,
        accounts: payload.accounts,
        isConnected: payload.isConnected,
      }
    case 'SET_API':
      return { ...state, api: payload.api }
    case 'SET_SOULDBOUND':
      let isSoulbound = false
      if (payload.metadata) {
        isSoulbound = true
      }
      return {
        ...state,
        soulbound: { isSoulbound, metadata: payload.metadata },
      }
    case 'SET_BALANCE':
      return { ...state, totalBalance: payload.totalBalance }
    case 'LOGOUT':
      return { ...INITIAL_STATE }
    default:
      return { ...state }
  }
}
