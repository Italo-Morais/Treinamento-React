import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRoutes } from './routes'
import { BrowserRouter } from 'react-router-dom'
import { NameProvider } from './context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NameProvider>
        <AppRoutes/>
      </NameProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
