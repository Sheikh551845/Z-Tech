import React from 'react'

export default function SumsungBanner() {
    
    


  return (
    <div className="">
    
    <div className="carousel w-full h-[800px]">
<div id="slide1" className="carousel-item relative w-full">
 
  <div className="overflow-y-hidden  h-[800px]">
    <div className="relative flex justify-center items-center md:justify-start ">
      <img className=" h-[800px]  w-screen hidden lg:block" src="https://i.ibb.co/qm3sRb8/samsung.jpg" alt="randeer" />
      <img className=" h-[800px]  w-screen md:block lg:hidden hidden " src="https://i.ibb.co/qm3sRb8/samsung.jpg" alt="randeer" />
      <img className=" h-[800px]  w-screen md:hidden" src="https://i.ibb.co/qm3sRb8/samsung.jpg" alt="randeer" />
      
    
    </div>
  </div>

  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide5" className="btn btn-circle">❮</a> 
    <a href="#slide2" className="btn btn-circle">❯</a>
  </div>
</div> 
<div id="slide2" className="carousel-item relative w-full">
<div className="overflow-y-hidden  h-[800px]">
    <div className="relative flex justify-center items-center md:justify-start ">
      <img className=" h-[800px]  w-screen hidden lg:block  " src="https://i.ibb.co/52QVqPf/samsung-galaxy-fold.jpg" alt="randeer" />
      <img className=" h-[800px]  w-screen md:block lg:hidden hidden  " src="https://i.ibb.co/52QVqPf/samsung-galaxy-fold.jpg" alt="randeer" />
      <img className=" h-[800px]  w-screen md:hidden  " src="https://i.ibb.co/52QVqPf/samsung-galaxy-fold.jpg" alt="randeer" />
     
    </div>
  </div>
  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide1" className="btn btn-circle">❮</a> 
    <a href="#slide3" className="btn btn-circle">❯</a>
  </div>
</div> 
<div id="slide3" className="carousel-item relative w-full">
<div className="overflow-y-hidden  h-[800px]">
    <div className="relative flex justify-center items-center md:justify-start ">
      <img className=" h-[800px]  w-screen hidden lg:block " src="  https://i.ibb.co/ckWG0Tn/samsung-3.webp" alt="randeer" />
      <img className=" h-[800px]  w-screen md:block lg:hidden hidden   " src="  https://i.ibb.co/ckWG0Tn/samsung-3.webp" alt="randeer" />
      <img className=" h-[800px]  w-screen md:hidden  " src="  https://i.ibb.co/ckWG0Tn/samsung-3.webp" alt="randeer" />
      
    </div>
  </div>
  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide2" className="btn btn-circle">❮</a> 
    <a href="#slide1" className="btn btn-circle">❯</a>
  </div>
</div> 




</div>

  </div>
  )
}
