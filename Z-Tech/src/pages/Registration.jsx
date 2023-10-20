




import { AuthContext } from '../Components/AuthProvider';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import SocialLogin from '../Components/SocialLogin';





export default function Registration() {

  const navigate =useNavigate()

  const {crateEmailUser,update,user}= useContext(AuthContext);
    
    



   const handleSubmit = (event) => {
    event.preventDefault();

       
    
      
        const name = event.target.name.value;
        const email = event.target.email.value;
        
        const password = event.target.password.value;

       
         
      
        
        if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)){
          toast.error("password credential not match");
            return;
        }


        
        crateEmailUser(email, password)
            .then(res => {
              
              update(name)
                 .then(()=>{
                  toast.success('User created successfully');
                  navigate('/')
                 })
              
            })
            .catch(error => {
                toast.error(error.message)
            })




    }
  return (
    <div className=" mx-auto my-10 ">
      <div className="relative flex w-72  md:w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mx-auto mt-32">
  <div className="relative mx-2  md:mx-4 -mt-6 mb-4 grid h-20 md:h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-r from-indigo-400 to-indigo-600  bg-clip-border text-white shadow-lg shadow-indigo-600">
    <h3 className="block font-sans text-xl md:text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
      Registration
    </h3>
  </div>
  <div className="card flex-shrink-0  md:w-full max-w-xs md:max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" placeholder="Full name" className="input input-bordered" name='name' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" name='email' required />
                            </div>
                           
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" name='password' required />
                            </div>
                            <div className="form-control mt-6 p-0">
                                <button className="btn  bg-gradient-to-r from-indigo-400 to-indigo-600 text-white" type='submit'>Register</button>
                            </div>
                           
                        </form>
                        <p className="mt-6 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
      Already have an account?
      <a
        href="/Login"
        className="ml-1 block font-sans text-sm font-bold leading-normal text-pink-500 antialiased"
      >
        Sign In
      </a>
    </p>
                            <SocialLogin />
                    </div>


</div>
    </div>
  )
}