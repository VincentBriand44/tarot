import { createContext, useState } from 'react'

const Settings = createContext()

const SettingsProvider = ({ children }) => {
  const [var1, var2] = useState(true)

  return (
    <Settings.Provider
      value={{
        var1,
        var2
      }}
    >
      {children}
    </Settings.Provider>
  )
}

export default Settings
export { SettingsProvider }
