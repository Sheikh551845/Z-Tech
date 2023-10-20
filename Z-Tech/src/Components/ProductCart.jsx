import React, { useContext } from 'react'
import { AuthContext } from './AuthProvider';
import { Link } from 'react-router-dom';

export default function ProductCart(product) {

    const{setCartData,CartData}=useContext(AuthContext)


    const {productName,price, imageUrl,_id,brandName,productType,description,rating}=product.product;


  return (
    <div className=" mx-auto ">
    <div className="relative flex w-[24rem] h-[42rem] p-2 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
    <div className="  relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
    <img
    src={imageUrl}
    alt=""
    className='h-48 w-full'
    />
    </div>
    <div className="p-6">
    <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-indigo-700 antialiased">
    {brandName}
    </h4>
    <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-orange-700 antialiased">
    {productName}
    </h4>
    <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-black antialiased">
    Product Type : <span className="font-normal">{productType}</span>
    </h4>
    <p className="mt-3 block font-sans text-xl font-semibold leading-relaxed text-gray-700 antialiased">
    Price : <span className="font-normal">{price}</span>
    </p>
    <p className="mt-3 block font-sans text-xl font-semibold leading-relaxed text-gray-700 antialiased">
    Rating : <span className="font-normal">{rating}</span>
    </p>

    <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
    {description}
    </p>

    </div>
    <div className="p-6 pt-0 flex justify-between">
    <Link to={`/ProductDetails/${_id}`}> 
  <button
    className="select-none rounded-lg bg-black py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-indigo-400 transition-all hover:shadow-lg hover:shadow-indigo-700 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    type="button"
    data-ripple-light="true"
  >
    Show Details
  </button>
  </Link>
    
  <Link to={`/UpdateProduct/${_id}`}> 
  <button
    className="select-none rounded-lg bg-black py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-indigo-400 transition-all hover:shadow-lg hover:shadow-indigo-700 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    type="button"
    data-ripple-light="true"
  >
    Update
  </button>
  </Link>
  
   
    </div>
    </div>
    </div>
  )
}
