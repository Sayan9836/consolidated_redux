import React from 'react'
import Product from '../components/product/Product'

const Home = () => {
  return (
    <div>
     <h2 className="heading">Welcome to Redux toolkit Store</h2>

     <section>
        <h3>Products</h3>
         <Product/>
     </section>
    </div>
  )
}

export default Home
