import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.min.css"
import './index.css'
import Site from './site'
import TopNavbar from './components/top_nav'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TopNavbar/>
    <Site/>
    <FloatingWhatsApp phoneNumber='263772703234' accountName='RIA' avatar='https://ngratesc.sirv.com/ria/logo.webp'/>
  </StrictMode>,
)
