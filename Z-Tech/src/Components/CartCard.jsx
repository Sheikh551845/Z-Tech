import React, { useContext } from 'react'
import { AuthContext } from './AuthProvider';
import Swal from 'sweetalert2'

export default function CartCard(product) {

    const{setCartData,CartData}=useContext(AuthContext)


    const {productName,price, imageUrl,_id}=product.product;
   

     const handleDelete =_id=>
     {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
              console.log(_id);

                fetch(`https://zt-ech-backend-i7c5jj7n8-sheikh-mohammads-projects.vercel.app/MyCart/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res =>res.json()
                      )
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Product has been deleted.',
                                'success'
                            )
                            const remaining = CartData.filter(product => product._id !== _id);
                            setCartData(remaining);
                        }
                    })

            }
        })
     }


  

  return (
    <div className="">
    <div className="relative flex w-[18rem] h-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
    <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
    <img
    src={imageUrl}
    alt=""
    className='h-52 w-full'
    />
    </div>
    <div className="p-6">
    <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
    {productName}
    </h4>
    <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
    {price}
    </p>
    </div>
    <div className="p-6 pt-0">
    
  <button
    className="select-none rounded-lg bg-black py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-indigo-400 transition-all hover:shadow-lg hover:shadow-indigo-700 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    type="button"
    data-ripple-light="true"
    onClick={()=>handleDelete(_id)}
  >
    Remove
  </button>
  
   
    </div>
    </div>
    </div>
  )
}
