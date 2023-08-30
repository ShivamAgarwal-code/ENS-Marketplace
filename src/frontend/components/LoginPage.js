import React from 'react'
import login_img from "./Public/login-img.png"
import arcana from "./Public/arcana_logo.png"
import { FcGoogle } from "react-icons/fc"
import { useState } from 'react'
import DENS from "./Public/DENS.png"




const LoginPage = ({ loginWithLink, login }) => {

  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handelSubmit = (e) => {
    e.preventdefault();
    loginWithLink(email);
  }


  return (
    <div className="bg-login h-screen w-100 p-8 flex items-center justify-center">
      <div className="md:w-3/6 sm:w-full  rounded-md shadow-sm shadow-slate-800 bg-slate-600/30 p-8">
        <div className="text-2xl text-center font-sans font-semibold text-white flex justify-center items-center">
          <h4>Login To</h4>
          <img
            className='w-16'
            src={DENS}
            alt="DENS Logo"
          />
        </div>
        <div className="grid md:grid-cols-2 md:grid-rows-1 sm:grid-rows-2 gap-2 items-center">

          <div className="md:py-12 py-4 ">
            <img src={login_img} alt="Login" />
          </div>
          <div className="form">
            <form action="/" onSubmit={handelSubmit}>
              <div className="mb-3">
                <label className="mt-4 block text-white text-sm font-bold mb-2">
                  Email
                </label>
                <input className="w-full py-1.5 px-4 mt-2 bg-slate-500/50 rounded-md outline-none font-semibold text-white focus:border-slate-800 focus:outline-cyan-400"
                  id="username"
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <button className="py-1.5 px-4 mt-3 w-full  bg-cyan-400 text-black rounded-md font-medium ml-auto items-end hover:bg-cyan-600" type='submit' >
                Sign In
              </button>

            </form>

            <div class="flex items-center justify-between w-full">
              <span class=" h-0.5 my-8 bg-gray-400 w-full border-0 "></span>
              <span class="px-3 font-medium    left-1/2 text-white">or</span>
              <span class="h-0.5  my-8 bg-gray-400 w-full border-0 "></span>
            </div>
            <button className="py-1.5 px-4  flex items-center justify-center  w-full  bg-white shadow-sm text-black rounded-md font-medium hover:bg-gray-200" onClick={() => { login('google') }}>
              <FcGoogle class="text-2xl" />
              <span className="text-sm ml-2" >
                SignIn with Google
              </span>
            </button>
          </div>
        </div>
        <span class="h-0.5  my-8 bg-gray-400 w-full border-0 "></span>
        <div className="flex items-center justify-center  pt-4">
          <p className="text-gray-300 text-xs md:text-sm">Authentication Provided By </p>
          <a href="https://www.arcana.network/" target='_blank'><img src={arcana} className='w-20 md:w-24 ml-2 md:mx-3' alt="aracana_logo" /></a>
        </div>
      </div>
    </div>
  )
}

export default LoginPage