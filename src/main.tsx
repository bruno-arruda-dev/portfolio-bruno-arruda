import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ConfigProvider } from './context/ConfigContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <ConfigProvider>
        <App />
      </ConfigProvider>
    </Router>
  </React.StrictMode>,
)
