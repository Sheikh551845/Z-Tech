import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className=" bg-base-100 flex justify-between items-center mt-2 justify-items-center shadow-xl p-3  "> 
    <div className="mr-10 flex items-center">
                            <img src="https://i.ibb.co/RbfSDbt/blockchain.png" className=" h-16 w-20 rounded-lg" alt="" />
                                <h3 className=" text-gray-800 font-bold tracking-normal leading-tight ml-3 text-2xl">Z Tech</h3>
                            </div>
   <div>
   <div className="hidden lg:block">
    <ul className="mt-5 flex gap-7 mr-7 text-lg text-white font-bold">
      
    <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " underline" : ""
              }
            >
              <li className="cursor-pointer h-full flex items-center text-sm text-indigo-700 tracking-normal transition duration-150 ease-in-out">
    <span className="mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" />
            <rect x={4} y={4} width={6} height={6} rx={1} />
            <rect x={14} y={4} width={6} height={6} rx={1} />
            <rect x={4} y={14} width={6} height={6} rx={1} />
            <rect x={14} y={14} width={6} height={6} rx={1} />
        </svg>
    </span>
    Home
</li>
            </NavLink>
      
      <NavLink
              to="/AddProducts"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " underline" : ""
              }
            >
              <li className="cursor-pointer h-full flex items-center text-sm hover:text-indigo-700 text-gray-800 mx-10 tracking-normal transition duration-150 ease-in-out">
    <span className="mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
        </svg>
    </span>
    Add Products
</li>

            </NavLink>

    
    <NavLink
              to="/MyCart"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " underline" : ""
              }
            >
              <li className="cursor-pointer h-full flex items-center text-sm hover:text-indigo-700 text-gray-800 mr-10 tracking-normal transition duration-150 ease-in-out">
    <span className="mr-2">
     <img src="https://i.ibb.co/yPnQFHQ/shopping-cart.png" className="icon icon-tabler icon-tabler-compass" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"></img>
    </span>
    My Cart
</li>
            </NavLink>
    
    
        <NavLink
              to="/Registration"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " underline" : ""
              }
            >
             <li className="cursor-pointer h-full flex items-center text-sm hover:text-indigo-700 text-gray-800 tracking-normal transition duration-150 ease-in-out">
    <span className="mr-2">
        <img src="https://i.ibb.co/3MJwzX0/pngegg-1.png" alt="" className="icon icon-tabler icon-tabler-code" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </span>
    Registration
</li>
            </NavLink>
      
     
    </ul>
  </div>
  <div className="dropdown mr-6 relative">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <div className="absolute right-20">
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-28 ">
      <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " underline" : ""
              }
            >
              <li className=" mt-2 cursor-pointer text-sm text-indigo-700 tracking-normal transition duration-150 ease-in-out">
   
    Home
</li>
            </NavLink>
      
      <NavLink
              to="/AddProducts"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " underline" : ""
              }
            >
              <li className=" mt-2 cursor-pointer  text-sm hover:text-indigo-700 text-gray-800  tracking-normal transition duration-150 ease-in-out">
   
    Add Products
</li>

            </NavLink>

    
    <NavLink
              to="/MyCart"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " underline" : ""
              }
            >
              <li className=" mt-2 cursor-pointer  text-sm hover:text-indigo-700 text-gray-800 mr-10 tracking-normal transition duration-150 ease-in-out">
    
    My Cart
</li>
            </NavLink>
    
    
        <NavLink
              to="/Registration"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " underline" : ""
              }
            >
             <li className=" mt-2 cursor-pointer  text-sm hover:text-indigo-700 text-gray-800 tracking-normal transition duration-150 ease-in-out">
   
    Registration
</li>
            </NavLink>
      
     
      </ul>
      </div>
      
    </div>
   </div>
   
    {/* // user && Object.keys(user).length > 0?  {user.displayName}  :

    <div>
      <NavLink to="/Login">
      <button className="md:btn text-black p-1 md:w-22 md:h-6    md:p-3 bg-white rounded-lg text-xs lg:text-base">Log In</button>
   </NavLink>
    </div> */}
    <div className="flex justify-center items-center gap-2 ">
    <p className="text-black fond-bold text-xs lg:text-xl">Sheikh</p>
    
    <div className="avatar">
      <div className="w-6 md:w-12 rounded-full ring ring-offset-base-100 ring-offset-2">

        {/* {
          user?.photoURL !==null ? <img src={user.photoURL} /> : <img src="https://i.ibb.co/3MJwzX0/pngegg-1.png"/>
        } */}
         
         <img src="https://i.ibb.co/3MJwzX0/pngegg-1.png"/>
       
      </div>
      </div>
    
      <button className="md:btn text-black p-1 md:w-22 md:h-6    md:p-3 bg-white rounded-lg text-xs lg:text-base"
        //   onClick={logout}
      >Logout</button>
    
    </div> 

   
   </div>
  )
}
