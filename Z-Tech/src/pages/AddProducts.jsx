import React, { useState } from 'react'
import { toast } from 'react-toastify';

export default function AddProducts() {
  const [formData, setFormData] = useState({
    
    brandName: '',
    productName: '',
    productType: '',
    price: '',
    imageUrl: '',
    rating: '',
    description: ''
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

    fetch('http://localhost:8888/AllProducts', {
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(formData)
  })
      .then(res => res.json())
      .then(data => {
          if(data.insertedId){
            toast.success("Product added successfully")
            setFormData({
    brandName: '',
    productName: '',
    productType: '',
    price: '',
    imageUrl: '',
    rating: '',
    description: '',
  })

          }
      })

    
    console.log('Form Data:', formData);
  };

  return (
    <div className="w-full my-14">
      <div className="bg-white rounded shadow-xl mt-7 py-7 px-10 w-fit mx-auto ">
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
      <div className="form-control flex lg:gap-12 flex-col lg:flex-row flex-wrap lg:items-center lg:justify-center mx-auto">
        <div>
          <label className="label">
            <span className="label-text text-bold text-indigo-600">Brand Name</span>
          </label>
          <input
            type="text"
            placeholder="Brand name"
            className="input border-indigo-600 w-80 md:w-96"
            name="brandName"
            value={formData.brandName}
            onChange={handleChange}
            required
          />
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
          <input
            type="text"
            placeholder="Product type"
            className="input border-indigo-600 w-80 md:w-96"
            name="productType"
            value={formData.productType}
            onChange={handleChange}
            required
          />
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
            Submit
          </button>
        </div>
      </div>
    </form>
    </div>
    </div>
  );
}

