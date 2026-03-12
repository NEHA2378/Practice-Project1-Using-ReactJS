import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Aboutus from './pages/About.jsx'
import Cart from './pages/Cart.jsx'
import Login from './pages/Login.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about-us' element={<Aboutus/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/my-cart' element={<Cart/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
