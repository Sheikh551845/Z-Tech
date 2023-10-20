import React, { useContext, useEffect } from 'react'
import { AuthContext } from './AuthProvider'
import FeatureCard from './FeatureCard';

export default function Featured() {

    const {data, theme}=useContext(AuthContext);

     const SlicedData = data.slice(0,5);


    
  return (
    
    
    <div className="mx-auto my-24">
      {
        theme ==="light"?<h1 className="text-2xl lg:text-5xl text-indigo-700 font-bold my-10 ml-5">Featured products:</h1>
        :
        <h1 className="text-2xl lg:text-5xl text-white font-bold my-10 ml-5">Featured products:</h1>
      }
        
    
    <div className="topic-cards mx-auto flex flex-wrap gap-4">
    {
    SlicedData?.map((product, index) => (
        <FeatureCard key={index} product={product}></FeatureCard>
      ))
  }
    </div>
    
  </div>
  )
}


