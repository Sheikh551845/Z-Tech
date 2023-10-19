import React from 'react'
import { Link } from 'react-router-dom'

export default function Banner() {
  return (
    <div className="">
    
      <div className="carousel w-full h-[800px]">
  <div id="slide1" className="carousel-item relative w-full">
   
    <div className="overflow-y-hidden  h-[800px]">
      <div className="relative flex justify-center items-center md:justify-start ">
        <img className=" h-[800px]  w-screen hidden lg:block" src="https://i.ibb.co/9pFbNKB/new-smartphone-balancing-with-podium.jpg" alt="randeer" />
        <img className=" h-[800px]  w-screen md:block lg:hidden hidden " src="https://i.ibb.co/9pFbNKB/new-smartphone-balancing-with-podium.jpg" alt="randeer" />
        <img className=" h-[800px]  w-screen md:hidden" src="https://i.ibb.co/9pFbNKB/new-smartphone-balancing-with-podium.jpg" alt="randeer" />
        
        <div className="flex absolute justify-start flex-col md:flex-row items-center">
          <div className=" py-32 sm:py-20  md:hidden" />
          <div className="mt-10  lg:w-auto custom sm:mt-96 md:mt-0 h-full flex px-4 md:px-0  z-10 justify-center items-center md:items-start flex-col md:pl-20 lg:px-20 2xl:px-44">
            <p className="text-xl sm:text-2xl xl:text-4xl text-center md:text-left font-semibold leading-6 xl:leading-10 text-gray-100 md:w-96 ">Smart Phones</p>
            <p className="mt-4 md:w-96  xl:w-3/4 text-center md:text-left  text-base leading-normal text-gray-200">All latest smart phones for top quality brands </p>

           <Link to="/AllProducts"> <button className="mt-6 shrink-0 w-full md:w-auto  lg:mt-8 py-2 md:py-3 px-10 flex justify-center duration-700  items-center text-base border-2 border-white transition hover:-translate-y-1 hover:bg-gray-100 hover:text-gray-800 font-medium text-white">
              Explore Now
            </button></Link>

          </div>
        </div>
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
        <img className=" h-[800px]  w-screen hidden lg:block  " src="https://i.ibb.co/HrhkfsZ/black-wireless-earbud-with-charging-case.jpg" alt="randeer" />
        <img className=" h-[800px]  w-screen md:block lg:hidden hidden  " src="https://i.ibb.co/HrhkfsZ/black-wireless-earbud-with-charging-case.jpg" alt="randeer" />
        <img className=" h-[800px]  w-screen md:hidden  " src="https://i.ibb.co/HrhkfsZ/black-wireless-earbud-with-charging-case.jpg" alt="randeer" />
        <div className="flex absolute justify-start flex-col md:flex-row items-center">
          <div className=" py-32 sm:py-20  md:hidden" />
          <div className="mt-10  lg:w-auto custom sm:mt-96 md:mt-0 h-full flex px-4 md:px-0  z-10 justify-center items-center md:items-start flex-col md:pl-20 lg:px-20 2xl:px-44">
            <p className="text-xl sm:text-2xl xl:text-4xl text-center md:text-left font-semibold leading-6 xl:leading-10 text-gray-100 md:w-96 ">Earbud</p>
            <p className="mt-4 md:w-96  xl:w-3/4 text-center md:text-left  text-base leading-normal text-gray-200">Top quality earbuds of top brands</p>
           <Link to="/AllProducts"> <button className="mt-6 shrink-0 w-full md:w-auto  lg:mt-8 py-2 md:py-3 px-10 flex justify-center duration-700  items-center text-base border-2 border-white transition hover:-translate-y-1 hover:bg-gray-100 hover:text-gray-800 font-medium text-white">
              Explore Now
            </button></Link>
          </div>
        </div>
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
        <img className=" h-[800px]  w-screen hidden lg:block " src="https://i.ibb.co/74JfcV2/new-smartwatch-balancing-with-hand.jpg" alt="randeer" />
        <img className=" h-[800px]  w-screen md:block lg:hidden hidden   " src="https://i.ibb.co/74JfcV2/new-smartwatch-balancing-with-hand.jpg" alt="randeer" />
        <img className=" h-[800px]  w-screen md:hidden  " src="https://i.ibb.co/74JfcV2/new-smartwatch-balancing-with-hand.jpg" alt="randeer" />
        <div className="flex absolute justify-start flex-col md:flex-row items-center">
          <div className=" py-32 sm:py-20  md:hidden" />
          <div className="mt-10  lg:w-auto custom sm:mt-96 md:mt-0 h-full flex px-4 md:px-0  z-10 justify-center items-center md:items-start flex-col md:pl-20 lg:px-20 2xl:px-44">
            <p className="text-xl sm:text-2xl xl:text-4xl text-center md:text-left font-semibold leading-6 xl:leading-10 text-gray-100 md:w-96 ">Smart Watch</p>
            <p className="mt-4 md:w-96  xl:w-3/4 text-center md:text-left  text-base leading-normal text-gray-200">We provide Smart Watch from all brands</p>
           <Link to="/AllProducts"> <button className="mt-6 shrink-0 w-full md:w-auto  lg:mt-8 py-2 md:py-3 px-10 flex justify-center duration-700  items-center text-base border-2 border-white transition hover:-translate-y-1 hover:bg-gray-100 hover:text-gray-800 font-medium text-white">
              Explore Now
            </button></Link>
          </div>
        </div>
      </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 

  <div id="slide4" className="carousel-item relative w-full">
  <div className="overflow-y-hidden  h-[800px]">
      <div className="relative flex justify-center items-center md:justify-start ">
        <img className=" h-[800px]  w-screen hidden lg:block " src="https://i.ibb.co/CMfWBfR/still-life-tech-device.jpg" alt="randeer" />
        <img className=" h-[800px]  w-screen md:block lg:hidden hidden  " src="https://i.ibb.co/CMfWBfR/still-life-tech-device.jpg" alt="randeer" />
        <img className=" h-[800px]  w-screen md:hidden " src="https://i.ibb.co/CMfWBfR/still-life-tech-device.jpg" alt="randeer" />
        <div className="flex absolute justify-start flex-col md:flex-row items-center">
          <div className=" py-32 sm:py-20  md:hidden" />
          <div className="mt-10  lg:w-auto custom sm:mt-96 md:mt-0 h-full flex px-4 md:px-0  z-10 justify-center items-center md:items-start flex-col md:pl-20 lg:px-20 2xl:px-44">
            <p className="text-xl sm:text-2xl xl:text-4xl text-center md:text-left font-semibold leading-6 xl:leading-10 text-gray-100 md:w-96 ">Phone Accessories</p>
            <p className="mt-4 md:w-96  xl:w-3/4 text-center md:text-left  text-base leading-normal text-gray-200">Your all needed accessories can get from us </p>
           <Link to="/AllProducts"> <button className="mt-6 shrink-0 w-full md:w-auto  lg:mt-8 py-2 md:py-3 px-10 flex justify-center duration-700  items-center text-base border-2 border-white transition hover:-translate-y-1 hover:bg-gray-100 hover:text-gray-800 font-medium text-white">
              Explore Now
            </button></Link>
          </div>
        </div>
      </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide5" className="btn btn-circle">❯</a>
    </div>
  </div>

  <div id="slide5" className="carousel-item relative w-full">
  <div className="overflow-y-hidden  h-[800px]">
      <div className="relative flex justify-center items-center md:justify-start ">
        <img className=" h-[800px]  w-screen hidden lg:block " src="https://i.ibb.co/fnDRmDC/2007-i211-018-laptop-smartphone-mockups-realistic.jpg" alt="randeer" />
        <img className=" h-[800px]  w-screen md:block lg:hidden hidden  " src="https://i.ibb.co/fnDRmDC/2007-i211-018-laptop-smartphone-mockups-realistic.jpg" alt="randeer" />
        <img className=" h-[800px]  w-screen md:hidden " src="https://i.ibb.co/fnDRmDC/2007-i211-018-laptop-smartphone-mockups-realistic.jpg" alt="randeer" />
        <div className="flex absolute justify-start flex-col md:flex-row items-center">
          <div className=" py-32 sm:py-20  md:hidden" />
          <div className="mt-10  lg:w-auto custom sm:mt-96 md:mt-0 h-full flex px-4 md:px-0  z-10 justify-center items-center md:items-start flex-col md:pl-20 lg:px-20 2xl:px-44">
            <p className="text-xl sm:text-2xl xl:text-4xl text-center md:text-left font-semibold leading-6 xl:leading-10 text-gray-100 md:w-96 ">Laptops</p>
            <p className="mt-4 md:w-96  xl:w-3/4 text-center md:text-left  text-base leading-normal text-gray-200">We provides to brands laptops </p>
            <button className="mt-6 shrink-0 w-full md:w-auto  lg:mt-8 py-2 md:py-3 px-10 flex justify-center duration-700  items-center text-base border-2 border-white transition hover:-translate-y-1 hover:bg-gray-100 hover:text-gray-800 font-medium text-white">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

    </div>
  )
}

// https://i.ibb.co/HrhkfsZ/black-wireless-earbud-with-charging-case.jpg
// https://i.ibb.co/CMfWBfR/still-life-tech-device.jpg
// https://i.ibb.co/74JfcV2/new-smartwatch-balancing-with-hand.jpg
// https://i.ibb.co/9pFbNKB/new-smartphone-balancing-with-podium.jpghttps://i.ibb.co/fnDRmDC/2007-i211-018-laptop-smartphone-mockups-realistic.jpg