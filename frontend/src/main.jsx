import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from "react-router-dom"
import { SnackbarProvider } from "notistack"
import { Snackbar } from '@mui/material'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <SnackbarProvider>
         <App />
      </SnackbarProvider>         
    </Router>

  </React.StrictMode>,
)
