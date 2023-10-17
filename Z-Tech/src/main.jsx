import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Layout from './pages/Layout';
import AddProducts from './pages/AddProducts';
import MyCart from './pages/MyCart';
import Registration from './pages/Registration';


const router = createBrowserRouter([
  {
  path: "/",
  element: <Layout></Layout>,
  errorElement:<ErrorPage></ErrorPage>,
  children:[
    {
      path: "/",
      element:<Home></Home>
  },
  {
    path: "/AddProducts",
    element:<AddProducts></AddProducts>
}, 
{
  path: "/MyCart",
  element:<MyCart></MyCart>
},
{
  path: "/Registration",
  element:<Registration></Registration>
},

 ],
},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
