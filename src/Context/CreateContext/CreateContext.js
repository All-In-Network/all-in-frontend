import React from 'react'

export const INITIAL_STATE = {
  isConnected: false,
  soulbound: { isSoulbound: false, metadata: '' },
  funded: { isFunded: false },
  accounts: undefined,
  api: undefined,
  totalBalance: 10000,
  goals: {
    initialBalance: 10000,
    profitGoal: 100,
    drawdown: 400,
    maxDailyLoss: 200,
    mantainConsistency: 0,
  },
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
      const isSoulbound = !!payload.metadata
      return {
        ...state,
        soulbound: { isSoulbound, metadata: payload.metadata },
      }
    case 'SET_ISFUNDED':
      return { ...state, funded: { isFunded: payload.isFunded } }
    case 'SET_BALANCE':
      return { ...state, totalBalance: payload.totalBalance }
    case 'SET_GOALS':
      return { ...state, goals: payload.goals }
    case 'LOGOUT':
      return { ...INITIAL_STATE }
    default:
      return { ...state }
  }
}

export const WalletStateContext = React.createContext(undefined)

export const WalletDispatchContext = React.createContext(undefined)

export function WalletProvider({ children }) {
  const [state, dispatch] = React.useReducer(walletReducer, INITIAL_STATE)

  return (
    <WalletStateContext.Provider value={state}>
      <WalletDispatchContext.Provider value={dispatch}>
        {children}
      </WalletDispatchContext.Provider>
    </WalletStateContext.Provider>
  )
}
