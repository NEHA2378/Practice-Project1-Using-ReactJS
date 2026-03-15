import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Aboutus from './pages/About.jsx'
import Cart from './pages/Cart.jsx'
import Login from './pages/Login.jsx'
import Accordion from './pages/Accordion.jsx'
import Layout from './components/common/Layout.jsx'
import Product from './pages/Product.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import Error404 from './pages/Error404.jsx'
import UseEffectExample from './pages/UseEffectExample.jsx'


createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<Aboutus />} />
          <Route path='/services' element={<Services />} />
          <Route path='/my-cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/faq' element={<Accordion />} />
          <Route path='/product' element={<Product />} />
          <Route path='/product-details/:id' element={<ProductDetails />} />
          <Route path='/use-effect' element={<UseEffectExample/>} />
        </Route>
        <Route path='*' element={<Error404/>}/>
      </Routes>
    </BrowserRouter>
  
)
