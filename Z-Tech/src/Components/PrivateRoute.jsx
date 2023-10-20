import React, { useContext } from 'react'
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function PrivateRoute({children}) {
    const { user, loading } = useContext(AuthContext);


    
    if (loading) 
    return <h1 className="text-5xl max-h-screen w-fit mx-auto mt-15 font-bold">Loading.....</h1>
    

    if (!user?.email) {
        toast.error("Please Log In ")
        
        return <Navigate to='/login' />
    }



    return children;
}
