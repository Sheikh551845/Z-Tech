import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

export default function Brands() {
  
    const{theme}=useContext(AuthContext);
      
    
      return (
        <div className="mt-5 mb-10">
           <div className="w-fit mx-auto mb-5">
           {
        theme ==="light"? <h1 className="text-2xl lg:text-5xl text-indigo-700 font-bold my-10 ml-10">We work with</h1>
        :
        <h1 className="text-2xl lg:text-5xl text-white font-bold my-10 ml-10">We work with</h1>
      }
         
          </div>
          <div className="carousel carousel-center max-w-screen p-4 space-x-4 bg-neutral rounded-box ">
         
         <div className="carousel-item">
         <div className="overflow-y-hidden h-[600px] md:h-[800px]">
             <div className="relative flex justify-center items-center md:justify-start ">
               <img className=" h-[600px] w-[50vh] md:h-[800px]  md:w-[70vw] hidden lg:block" src="https://i.ibb.co/ncpL0VC/Apple-logo.jpg" alt="randeer" />
               <img className=" h-[600px] w-[50vh] md:h-[800px]  md:w-[70vw] md:block lg:hidden hidden " src="https://i.ibb.co/ncpL0VC/Apple-logo.jpg" alt="randeer" />
               <img className=" h-[600px] w-[50vh] md:h-[800px]  md:w-[70vw] md:hidden" src="https://i.ibb.co/ncpL0VC/Apple-logo.jpg" alt="randeer" />
               
               <div className="flex absolute justify-start flex-col md:flex-row items-center">
                 <div className=" py-32 sm:py-20  md:hidden" />
                 <div className="mt-10  lg:w-auto custom sm:mt-96 md:mt-0 h-full flex px-4 md:px-0  z-10 justify-center items-center md:items-start flex-col md:pl-20 lg:px-20 2xl:px-44">
                   <p className="text-xl sm:text-2xl xl:text-4xl text-center md:text-left font-semibold leading-6 xl:leading-10 text-gray-100 md:w-96 ">Apple</p>
                   
                  <Link to={`/Apple`}> 
         <button
           className=" mt-5 select-none rounded-lg bg-black py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-indigo-400 transition-all hover:shadow-lg hover:shadow-indigo-700 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
           type="button"
           data-ripple-light="true"
         >
           Show Apple Products
         </button>
         </Link>
       
                 </div>
               </div>
             </div>
           </div>
         </div> 
         <div className="carousel-item">
         <div className="overflow-y-hidden  h-[600px] md:h-[800px]">
             <div className="relative flex justify-center items-center md:justify-start ">
               <img className=" h-[600px] w-[50vh] md:h-[800px]  md:w-[70vw] hidden lg:block" src="https://i.ibb.co/q9wHxNm/Samsung-Logo.jpg" alt="randeer" />
               <img className=" h-[600px] w-[50vh] md:h-[800px]  md:w-[70vw] md:block lg:hidden hidden " src="https://i.ibb.co/q9wHxNm/Samsung-Logo.jpg" alt="randeer" />
               <img className=" h-[600px] w-[50vh] md:h-[800px]  md:w-[70vw] md:hidden" src="https://i.ibb.co/q9wHxNm/Samsung-Logo.jpg" alt="randeer" />
               
               <div className="flex absolute justify-start flex-col md:flex-row items-center">
                 <div className=" py-32 sm:py-20  md:hidden" />
                 <div className="mt-10  lg:w-auto custom sm:mt-96 md:mt-0 h-full flex px-4 md:px-0  z-10 justify-center items-center md:items-start flex-col md:pl-20 lg:px-20 2xl:px-44">
                   <p className="text-xl sm:text-2xl xl:text-4xl text-center md:text-left font-semibold leading-6 xl:leading-10 text-gray-100 md:w-96 ">Sumsung</p>
                   
       
                  <Link to={`/Sumsung`}> 
         <button
           className=" mt-5 select-none rounded-lg bg-black py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-indigo-400 transition-all hover:shadow-lg hover:shadow-indigo-700 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
           type="button"
           data-ripple-light="true"
         >
           Show Sumsung Products
         </button>
         </Link>
       
                 </div>
               </div>
             </div>
           </div>
         </div> 
         <div className="carousel-item">
         <div className="overflow-y-hidden  h-[600px] md:h-[800px]">
             <div className="relative flex justify-center items-center md:justify-start ">
               <img className=" h-[600px] w-[50vh] md:h-[800px]  md:w-[70vw] hidden lg:block" src=" https://i.ibb.co/tbVkFb8/sony-logo.jpg" alt="randeer" />
               <img className=" h-[600px] w-[50vh] md:h-[800px]  md:w-[70vw] md:block lg:hidden hidden " src=" https://i.ibb.co/tbVkFb8/sony-logo.jpg" alt="randeer" />
               <img className=" h-[600px] w-[50vh] md:h-[800px]  md:w-[70vw] md:hidden" src=" https://i.ibb.co/tbVkFb8/sony-logo.jpg" alt="randeer" />
               
               <div className="flex absolute justify-start flex-col md:flex-row items-center">
                 <div className=" py-32 sm:py-20  md:hidden" />
                 <div className="mt-10  lg:w-auto custom sm:mt-96 md:mt-0 h-full flex px-4 md:px-0  z-10 justify-center items-center md:items-start flex-col md:pl-20 lg:px-20 2xl:px-44">
                   <p className="text-xl sm:text-2xl xl:text-4xl text-center md:text-left font-semibold leading-6 xl:leading-10 text-gray-100 md:w-96 ">Sony</p>
                   
       
                  <Link to={`/Sony`}> 
         <button
           className=" mt-5 select-none rounded-lg bg-black py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-indigo-400 transition-all hover:shadow-lg hover:shadow-indigo-700 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
           type="button"
           data-ripple-light="true"
         >
           Show Sony Products
         </button>
         </Link>
       
                 </div>
               </div>
             </div>
           </div>
         </div> 
         <div className="carousel-item">
         <div className="overflow-y-hidden  h-[600px] md:h-[800px]">
             <div className="relative flex justify-center items-center md:justify-start ">
               <img className=" h-[600px] w-[50vh] md:h-[800px]  md:w-[70vw] hidden lg:block" src="https://i.ibb.co/gRpK1PX/Asus-Logo.jpg" alt="randeer" />
               <img className=" h-[600px] w-[50vh] md:h-[800px]  md:w-[70vw] md:block lg:hidden hidden " src="https://i.ibb.co/gRpK1PX/Asus-Logo.jpg" alt="randeer" />
               <img className=" h-[600px] w-[50vh] md:h-[800px]  md:w-[70vw] md:hidden" src="https://i.ibb.co/gRpK1PX/Asus-Logo.jpg" alt="randeer" />
               
               <div className="flex absolute justify-start flex-col md:flex-row items-center">
                 <div className=" py-32 sm:py-20  md:hidden" />
                 <div className="mt-10  lg:w-auto custom sm:mt-96 md:mt-0 h-full flex px-4 md:px-0  z-10 justify-center items-center md:items-start flex-col md:pl-20 lg:px-20 2xl:px-44">
                   <p className="text-xl sm:text-2xl xl:text-4xl text-center md:text-left font-semibold leading-6 xl:leading-10 text-gray-100 md:w-96 ">Asus</p>
                   
       
                  <Link to={`/Asus`}> 
         <button
           className=" mt-5 select-none rounded-lg bg-black py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-indigo-400 transition-all hover:shadow-lg hover:shadow-indigo-700 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
           type="button"
           data-ripple-light="true"
         >
           Show Asus Products
         </button>
         </Link>
       
                 </div>
               </div>
             </div>
           </div>
         </div> 
        
         <div className="carousel-item">
         <div className="overflow-y-hidden  h-[600px] md:h-[800px]">
             <div className="relative flex justify-center items-center md:justify-start ">
               <img className=" h-[600px] w-[50vh] md:h-[800px]  md:w-[70vw] hidden lg:block" src="https://i.ibb.co/qJmNtN7/One-Plush-logo.webp" alt="randeer" />
               <img className=" h-[600px] w-[50vh] md:h-[800px]  md:w-[70vw] md:block lg:hidden hidden " src="https://i.ibb.co/qJmNtN7/One-Plush-logo.webp" alt="randeer" />
               <img className=" h-[600px] w-[50vh] md:h-[800px]  md:w-[70vw] md:hidden" src="https://i.ibb.co/qJmNtN7/One-Plush-logo.webp" alt="randeer" />
               
               <div className="flex absolute justify-start flex-col md:flex-row items-center">
                 <div className=" py-32 sm:py-20  md:hidden" />
                 <div className="mt-10  lg:w-auto custom sm:mt-96 md:mt-0 h-full flex px-4 md:px-0  z-10 justify-center items-center md:items-start flex-col md:pl-20 lg:px-20 2xl:px-44">
                   <p className="text-xl sm:text-2xl xl:text-4xl text-center md:text-left font-semibold leading-6 xl:leading-10 text-gray-100 md:w-96 ">One Plush</p>
                   
       
                  <Link to={`/Oneplush`}> 
         <button
           className=" mt-5 select-none rounded-lg bg-black py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-indigo-400 transition-all hover:shadow-lg hover:shadow-indigo-700 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
           type="button"
           data-ripple-light="true"
         >
           Show Oneplush Products
         </button>
         </Link>
       
                 </div>
               </div>
             </div>
           </div>
         </div> 
         <div className="carousel-item">
         <div className="overflow-y-hidden  h-[600px] md:h-[800px]">
             <div className="relative flex justify-center items-center md:justify-start ">
               <img className=" h-[600px] w-[50vh] md:h-[800px]  md:w-[70vw] hidden lg:block" src="https://i.ibb.co/RHkNsfV/Realme-LOGO.webp" alt="randeer" />
               <img className=" h-[600px] w-[50vh] md:h-[800px]  md:w-[70vw] md:block lg:hidden hidden " src="https://i.ibb.co/RHkNsfV/Realme-LOGO.webp" alt="randeer" />
               <img className=" h-[600px] w-[50vh] md:h-[800px]  md:w-[70vw] md:hidden" src="https://i.ibb.co/RHkNsfV/Realme-LOGO.webp" alt="randeer" />
               
               <div className="flex absolute justify-start flex-col md:flex-row items-center">
                 <div className=" py-32 sm:py-20  md:hidden" />
                 <div className="mt-10  lg:w-auto custom sm:mt-96 md:mt-0 h-full flex px-4 md:px-0  z-10 justify-center items-center md:items-start flex-col md:pl-20 lg:px-20 2xl:px-44">
                   <p className="text-xl sm:text-2xl xl:text-4xl text-center md:text-left font-semibold leading-6 xl:leading-10 text-gray-100 md:w-96 ">Realme</p>
                   
       
                  <Link to={`/Realme`}> 
         <button
           className=" mt-5 select-none rounded-lg bg-black py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-indigo-400 transition-all hover:shadow-lg hover:shadow-indigo-700 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
           type="button"
           data-ripple-light="true"
         >
           Show Realme Products
         </button>
         </Link>
       
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
        </div>
      
      );
    };

