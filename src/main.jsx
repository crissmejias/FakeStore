import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/cart'
import { FilterProvider } from './context/filters'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <FilterProvider>
    <CartProvider>
    <App />
    </CartProvider>
    </FilterProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
