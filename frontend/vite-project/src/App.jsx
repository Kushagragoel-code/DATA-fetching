import React, { useEffect, useState } from 'react'
import ProductList from './ProductList';


function App() {
  const [count, setCount] = useState(0)
  const [num, setNum] = useState(0)
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function APICall() {
      const response = await fetch('http://localhost:3000/api/products')

      const data = await response.json()
      setProducts(data)

    }
    APICall()
  }, []);
  return (
    <div>
      <h1>Product List</h1>
      <button onClick={() => setCount(count + 1)}>click count</button>
      <button onClick={() => setNum(num + 1)}>click num</button>
      <ProductList products={products} />
    </div>
  )
}

export default App
