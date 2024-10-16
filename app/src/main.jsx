import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { Part4 } from './Part4'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Part4/>
  </StrictMode>,
)
