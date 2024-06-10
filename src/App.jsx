import { useState } from 'react'
import './App.css'
import ProductList from './ProductList'
import Cart from './Cart'
import { PRODUCTS } from './products'

function App() {
  const [cart, setCart] = useState([])

  return (
   <div className='App'>
    <h2>Welcome to the Store</h2>
    <ProductList products={PRODUCTS} setCart={setCart} />
    <Cart setCart={setCart} cart={cart} />
   </div>
  )
}

export default App
