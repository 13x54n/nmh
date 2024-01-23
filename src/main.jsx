import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './utils/Router'
import { CartProvider } from './contexts/Cart'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider>
    <Router/>
  </CartProvider>,
)
