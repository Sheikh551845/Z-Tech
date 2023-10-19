import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom';

export default function ProductDetails() {

    const {_id}=useParams()
   
     
   
    const data=useLoaderData();

    

    

    const [card, setCard]=useState([])
    
    useEffect(()=>{
       const findCard = data?.find(card=> card._id == _id)

       setCard(findCard);
      
    }
    ,[_id,data])
   

    const {productName, imageUrl,description,brandName}=card;
  return (
    <div className="mx-auto">
    <div className=" py-12 mx-auto">
 <div className="h-[500px] rounded-md flex flex-col bg-no-repeat bg-cover" style={{ backgroundImage: `url('${imageUrl}')` }}>
   <div className="w-full h-[480px]">

   </div>
   <div className="w-full h-[120px]  bg-black bg-opacity-60 bg-blend-overlay">
       <p className="text-white p-4 text-3xl font-bold text-left mt-5 ml-5">{productName} </p>
   </div>
 </div>
 
 <div className="relative flex max-w-screen-xl flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
<div className="p-6">
<h5 className="mb-2 block font-sans text-3xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
 Details
</h5>
<h5 className="mb-2 block font-sans text-xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
 Provider: <span className='text-indigo-700'>{brandName}</span>
</h5>
<p className="block font-sans text-black font-normal leading-relaxed text-inherit antialiased">
 {description}
</p>
</div>

<div className="w-fit mx-auto">
<button
    className="select-none rounded-lg bg-black py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-indigo-400 transition-all hover:shadow-lg hover:shadow-indigo-700 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    type="button"
    data-ripple-light="true"
  >
    Add to Cart
  </button>
</div>

</div>




</div>


 
</div>
  )
}
