import React from 'react'

export default function SonyBanner() {


   



  return (
    <div className="">
    
    <div className="carousel w-full h-[800px]">
<div id="slide1" className="carousel-item relative w-full">
 
  <div className="overflow-y-hidden  h-[800px]">
    <div className="relative flex justify-center items-center md:justify-start ">
      <img className=" h-[800px]  w-screen hidden lg:block" src=" https://i.ibb.co/5jmHy1Z/sony-1.jpg" alt="randeer" />
      <img className=" h-[800px]  w-screen md:block lg:hidden hidden " src=" https://i.ibb.co/5jmHy1Z/sony-1.jpg" alt="randeer" />
      <img className=" h-[800px]  w-screen md:hidden" src=" https://i.ibb.co/5jmHy1Z/sony-1.jpg" alt="randeer" />
      
      
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
      <img className=" h-[800px]  w-screen hidden lg:block  " src="https://i.ibb.co/3chT5P4/sony-1.jpg" alt="randeer" />
      <img className=" h-[800px]  w-screen md:block lg:hidden hidden  " src="https://i.ibb.co/3chT5P4/sony-1.jpg" alt="randeer" />
      <img className=" h-[800px]  w-screen md:hidden  " src="https://i.ibb.co/3chT5P4/sony-1.jpg" alt="randeer" />
     
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
      <img className=" h-[800px]  w-screen hidden lg:block " src="https://i.ibb.co/cknPWYS/sony-3.jpg" alt="randeer" />
      <img className=" h-[800px]  w-screen md:block lg:hidden hidden   " src="https://i.ibb.co/cknPWYS/sony-3.jpg" alt="randeer" />
      <img className=" h-[800px]  w-screen md:hidden  " src="https://i.ibb.co/cknPWYS/sony-3.jpg" alt="randeer" />
     
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
