import React, { useContext } from 'react'
import ProductCart from '../Components/ProductCart';
import RealmeBanner from '../Components/RealmeBanner';
import { AuthContext } from '../Components/AuthProvider';

export default function Realme() {
    const {data}=useContext(AuthContext);

    const Product= data.filter(product => product.brandName === 'Realme');

  return (
    <div>
      <RealmeBanner></RealmeBanner>
      <div className="w-screen my-24 ">
      <div className="">
             
      <p className="lg:text-4xl text-3xl font-extrabold leading-9 text-indigo-700 w-fit mx-auto my-5">All Realme products</p> 


        
        
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
