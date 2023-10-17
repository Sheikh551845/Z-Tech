import React from 'react'
import ReactDOM from 'react-dom/client'


import './index.css'








import AddProducts from './pages/AddProducts';
import Layout from './pages/Layout';
import Home from './pages/Home';
import MyCart from './pages/MyCart';
import AuthProvider from './Components/AuthProvider';
import ErrorPage from './pages/ErrorPage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
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
{
  path: "/Login",
  element:<Login></Login>
},


 ],
},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
