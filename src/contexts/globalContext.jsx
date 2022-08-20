import { createContext, useState } from 'react'

const GlobalContext = createContext()

export function GlobalContextProvider({ children }) {
  const [players, setPlayers] = useState([
    { id: 0, name: 'Christian' },
    { id: 1, name: 'Didier' },
    { id: 2, name: 'Kiki' },
    { id: 3, name: 'Maxime' },
    { id: 4, name: 'Stephane' },
    { id: 5, name: 'Vincent' }
  ])

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <GlobalContext.Provider
      value={{
        players,
        setPlayers
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContext
