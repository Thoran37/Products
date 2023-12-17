import { useEffect } from 'react';
import { useState } from 'react';
import Card from './Card';

function RootLayout() {

  let [products, setPro] = useState([])
  useEffect(() => {
    async function fun() {
      let res = await fetch('https://fakestoreapi.com/products')
      let data = await res.json()
      setPro(data)
    }
    fun()
  })

  return (
    <div className='container-fluid'>
      <h1>Products</h1>
      <div className='row row-cols-sm-1 row-cols-md-2 row-cols-lg-4 p-3'>
        {
          products.map((temp,ind) => (
            <Card key={ind} data={temp} />
          ))
        }
      </div>
    </div>
  )
}
export default RootLayout