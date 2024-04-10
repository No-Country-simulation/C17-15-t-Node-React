import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import Example from './Example.jsx'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
      {/* <Example /> */}
    </ThemeProvider>

  </React.StrictMode>,
)
