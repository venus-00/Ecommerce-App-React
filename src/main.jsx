import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import ProductProvider from "./components/productContext.jsx";
import CartProvider from "./components/cartContext.jsx";


createRoot(document.getElementById('root')).render(
  <CartProvider>
    <ProductProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </ProductProvider>
  </CartProvider>,
)
