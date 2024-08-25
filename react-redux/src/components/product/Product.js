import React, { useEffect, useState } from 'react'
import './Product.css'
import { useDispatch } from 'react-redux';
import { add } from '../../store/CartSlice';
const Product = () => {
    const [products,setProducts]=useState([]);
    const dispatch=useDispatch();
    useEffect(()=>{
       const fetchProducts=async()=>{
          const URL='https://fakestoreapi.com/products'
           const data=await fetch(URL)
           .then(res=>res.json())
           .then(result=>setProducts(result))
       }
       fetchProducts();
    },[])
  return (
    <div className="product">
       {
        products?.map((prod)=>{
         return <div className="card" key={prod.id}>
              <img src={prod.image} alt="" />
              <h4>{prod.title}</h4>
              <h5>{prod.price}</h5>
              <button onClick={()=>dispatch(add(prod))} className="btn btn-primary">Add to cart</button>
          </div>
        })
       }
    </div>
  )
}

export default Product
