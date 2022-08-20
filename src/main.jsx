import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import { GlobalContextProvider } from './contexts/globalContext'
import { PartyContextProvider } from './contexts/PartyContext'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalContextProvider>
      <PartyContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PartyContextProvider>
    </GlobalContextProvider>
  </React.StrictMode>
)
