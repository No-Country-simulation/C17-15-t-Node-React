import React from 'react'
import ReactDOM from 'react-dom/client'
<<<<<<< HEAD
import App from './App.jsx'
=======
import App from './App'
// import Example from './Example.jsx'
>>>>>>> 38914d73c51d1020a1ae8db8b265b1f63c67746a
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
<<<<<<< HEAD
=======
      {/* <Example /> */}
>>>>>>> 38914d73c51d1020a1ae8db8b265b1f63c67746a
    </ThemeProvider>
  </React.StrictMode>,
)
