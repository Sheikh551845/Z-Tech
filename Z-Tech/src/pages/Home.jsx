import React, { useContext } from 'react'
import Banner from '../Components/Banner'
import Featured from '../Components/Featured'
import Brands from '../Components/Brands'
import HowToOrder from '../Components/HowToOrder'
import WhyUs from '../Components/WhyUs'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Components/AuthProvider'

export default function Home() {
  const{theme}=useContext(AuthContext);
  return (
    <div>
      <Banner></Banner>
      <Featured></Featured>
      <Brands></Brands>
      <HowToOrder></HowToOrder>
      <div className="w-fit mx-auto my-10">
      <Link to={`/AllProducts`}> 

      {
        theme=== "light"?
        <button
        className="select-none rounded-lg bg-black py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-indigo-400 transition-all hover:shadow-lg hover:shadow-indigo-700 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
        data-ripple-light="true"
      >
        All Products
      </button>
      :
      <button
      className="select-none rounded-lg bg-white py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-indigo-400 transition-all hover:shadow-lg hover:shadow-indigo-700 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-light="true"
    >
      All Products
    </button>

      }
 
  </Link>
      </div>
      <WhyUs></WhyUs>
    </div>
  )
}
