import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function UpdateProduct() {


    const {brandName,productName,productType,price,imageUrl,rating,description,_id}=useLoaderData();
    

    const [formData, setFormData] = useState({
    
        brandName: brandName,
        productName: productName,
        productType: productType,
        price: price,
        imageUrl: imageUrl,
        rating: rating,
        description: description
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        fetch(`https://zt-ech-backend-i7c5jj7n8-sheikh-mohammads-projects.vercel.app/AllProducts/${_id}`, {
          method: 'PUT',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(formData)
      })
          .then(res => res.json())
          .then(data => {
              if(data.modifiedCount > 0){
                toast.success("Product Updated successfully")
                
    
              }
          })
    
        
        console.log('Form Data:', formData);
      };
    
      return (
        <div className="w-full my-14">
            <p className="lg:text-4xl text-3xl font-extrabold leading-9 text-indigo-700 w-fit mx-auto my-5">Update Product</p> 
          <div className="bg-white rounded shadow-xl mt-7 py-7 px-10 w-fit mx-auto ">
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
          <div className="form-control flex lg:gap-12 flex-col lg:flex-row flex-wrap lg:items-center lg:justify-center mx-auto">
            <div>
              <label className="label">
                <span className="label-text text-bold text-indigo-600">Brand Name</span>
              </label>
              <select
      className="input border-indigo-600 w-80 md:w-96"
      name="brandName"
      value={formData.brandName}
      onChange={handleChange}
      required
    >
      <option value="">Select Brand</option>
      <option value="Apple">Apple</option>
      <option value="Samsung">Samsung</option>
      <option value="Realme">Realme</option>
      <option value="Sony">Sony</option>
      <option value="Asus">Asus</option>
      <option value="OnePlus">OnePlus</option>
    </select>
    
              
              {/* <input
                type="text"
                placeholder="Brand name"
                className="input border-indigo-600 w-80 md:w-96"
                name="brandName"
                value={formData.brandName}
                onChange={handleChange}
                required
              /> */}
            </div>
            <div>
              <label className="label">
                <span className="label-text text-bold text-indigo-600">Product Name</span>
              </label>
              <input
                type="text"
                placeholder="Product name"
                className="input border-indigo-600 w-80 md:w-96"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
    
          <div className="form-control flex lg:gap-12 flex-col lg:flex-row flex-wrap lg:items-center lg:justify-center mx-auto">
            <div>
              <label className="label">
                <span className="label-text text-bold text-indigo-600">Product type</span>
              </label>
              <select
      className="input border-indigo-600 w-80 md:w-96"
      name="productType"
      value={formData.productType}
      onChange={handleChange}
      required
    >
      <option value="">Select Product Type</option>
      <option value="Smartphone">Smartphone</option>
      <option value="Laptop">Laptop</option>
      <option value="Headphone">Headphone</option>
      <option value="Wireless Earbuds">Wireless Earbuds</option>
      <option value="Tv">Tv</option>
      <option value="Smartwatch">Smartwatch</option>
    </select>
    
              {/* <input
                type="text"
                placeholder="Product type"
                className="input border-indigo-600 w-80 md:w-96"
                name="productType"
                value={formData.productType}
                onChange={handleChange}
                required
              /> */}
            </div>
            <div>
              <label className="label">
                <span className="label-text text-bold text-indigo-600">Price</span>
              </label>
              <input
                type="text"
                placeholder="Price"
                className="input border-indigo-600 w-80 md:w-96"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </div>
          </div>
    
          <div className="form-control flex lg:gap-12 flex-col lg:flex-row flex-wrap lg:items-center lg:justify-center mx-auto">
            <div>
              <label className="label">
                <span className="label-text text-bold text-indigo-600">Image URL</span>
              </label>
              <input
                type="text"
                placeholder="Image URL"
                className="input border-indigo-600 w-80 md:w-96"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-bold text-indigo-600">Rating </span>
              </label>
              <input
                type="text"
                placeholder="Rating"
                className="input border-indigo-600 w-80 md:w-96"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                required
              />
            </div>
          </div>
    
          <div className="form-control lg:flex lg:gap-12 flex-row flex-wrap lg:items-center lg:justify-center mx-auto">
            <div>
              <label className="label">
                <span className="label-text text-bold text-indigo-600">description </span>
              </label>
              <input
                type="text"
                placeholder="description"
                className="input border-indigo-600 w-80 md:w-96"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
          </div>
    
          <div className="form-control mt-6 p-0">
            <hr className="h-[1px] bg-indigo-800 my-14" />
            <div className="flex flex-col flex-wrap items-center justify-center w-full px-7 lg:flex-row gap-x-4 gap-y-4">
              <button className="bg-indigo-700 rounded hover:bg-indigo-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[144px] w-full ">
                Update 
              </button>
            </div>
          </div>
        </form>
        </div>
        </div>
      );
}
