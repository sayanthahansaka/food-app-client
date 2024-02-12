import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useForm } from "react-hook-form"
import { AuthContext } from '../contexts/AuthProvider';

const Modal = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const {sigUpWithGmail, login} = useContext(AuthContext);
      const [errorMessage, setErrorMessage] = useState("");

    //   rendaring home page or specifig page
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

      const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        // console.log(email, password)
        login(email, password).then((result) => {
            const user = result.user;
            alert("Login Successfull");
            document.getElementById('my_modal_5').close()
            navigate(from, {replace: true})
        }).catch((error) => {
            const errorMessage = error.message;
            setErrorMessage("Provide a correct email and password..!")
        })
      };

    //   google signin
    const handleLogin = () => {
        sigUpWithGmail().then((result) => {
            const user = result.user;
            alert("Login successfull")
            navigate(from, {replace: true})
        }).catch((error) => console.log(error))
    }

    return (
        <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
            <div className="modal-box">

                <div className="modal-action flex flex-col justify-center mt-0">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body" method='dialog'>
                        <h3 className="font-bold text-lg"> Please Login!</h3>
                        {/* email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" {...register("email")}/>
                        </div>
                        {/* password */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" {...register("password")} />
                            <label className="label mt-1">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        {/* error */}
                        {
                            errorMessage ? <p className='text-red text-xs italic'>{errorMessage}</p>: ""
                        }

                        {/* login button */}
                        <div className="form-control mt-4">
                            <input type='submit' value="Login" className="btn bg-green text-white " />
                        </div>
                        <p className='text-center my-2'>Donot Have an account? <Link to="/signup" className='underline text-red ml-1'>Signup Now</Link> </p>
                        
                        {/* close button */}
                        <button htmlfor="my_modal_5"
                         onClick={() => document.getElementById('my_modal_5').close()}
                         className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                         >✕</button>
                    </form>

                    {/* Social Signup */}
                    <div className='text-center space-x-3 mb-5'>
                        <button className="btn btn-circle hover:bg-green hover:text-white" onClick={handleLogin}>
                            <FcGoogle />
                        </button>
                        <button className="btn btn-circle hover:bg-green hover:text-white">
                            <FaFacebook />
                        </button>
                    </div>
                </div>
            </div>
        </dialog>
    )
}

export default Modal