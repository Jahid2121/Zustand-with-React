import { useState } from 'react'
import './App.css'
import ProductList from './ProductList'
import Cart from './Cart'
import { PRODUCTS } from './products'

function App() {

  return (
   <div className='App'>
    <h2>Welcome to the Store</h2>
    <ProductList products={PRODUCTS} />
    <Cart />
   </div>
  )
}

export default App
