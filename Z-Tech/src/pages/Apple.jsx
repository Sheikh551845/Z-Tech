import React, { useContext } from 'react'
import AppleBanner from '../Components/AppleBanner'
import { AuthContext } from '../Components/AuthProvider'
import ProductCart from '../Components/ProductCart';

export default function Apple() {

    const {data}=useContext(AuthContext);

    const Product= data.filter(product => product.brandName === 'Apple');

  return (
    <div>
      <AppleBanner></AppleBanner>
      <div className="w-screen my-24 ">
      <div className="">
             
      <p className="lg:text-4xl text-3xl font-extrabold leading-9 text-indigo-700 w-fit mx-auto my-5">All products</p> 


        
        
<div className=" flex flex-wrap gap-4 max-w-fit mx-auto   ">
{
Product?.map((product, index) => (
<ProductCart key={index} product={product}></ProductCart>
))
}
</div>


      </div>

      
      </div>
    </div>
  )
}
