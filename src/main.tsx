import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.min.css"
import './index.css'
import Site from './site'
import TopNavbar from './components/top_nav'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TopNavbar/>
    <Site/>
  </StrictMode>,
)
