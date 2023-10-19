import React, { useContext } from 'react'
import { AuthContext } from '../Components/AuthProvider'
import CartCard from '../Components/CartCard';

export default function MyCart() {

  const {CartData}=useContext(AuthContext);
  


  return (
    <div className="mx-auto my-10">
    <h1 className="text-xl lg:text-3xl text-indigo-700 font-bold my-10 ml-10">Cart's Products:</h1>

{
  CartData.length == 0? <div className="my-10 mx-auto w-fit text-3xl font-bold h-screen"> <p>No Product Added Yet</p><br/> <p>Please Add</p></div>:
  <div className="topic-cards mx-auto flex flex-wrap gap-4 h-screen">
{
CartData?.map((product, index) => (
    <CartCard key={index} product={product}></CartCard>
  ))
}
</div>
}




</div>
  )
}
