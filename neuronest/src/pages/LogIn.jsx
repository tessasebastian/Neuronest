import React from 'react';
import { Link } from 'react-router-dom';
import parentlogin from './parentlogin.svg';


export default function LogIn() {
  return (
    <div className='p-3 max-w-lg mx-auto '>
      <h1 className='text-3xl text-center font-semibold my-7'> parent Sign In</h1>
      <div><img className=' h-80 w-96 absolute top-56 left-8' src={parentlogin} alt="therapist img" /></div>
        <form className='flex flex-col gap-4'>
            <label>Email*</label>
            <input type="email" className='border p-3 rounded-lg' id='email' /><br/>
            <label>Password*</label>
            <input type="password" className='border p-3 rounded-lg' id='password' /><br/>

            <div className='flex justify-between gap-2 '>
          <div>
            <span className='text-black-500'>Remember Me </span>
            <input type="checkbox" id="" name="remember me" value="remember me"></input>
          </div>
        <Link to={'/forgotpassword'}>
            <span className='text-red-500'>Forgot Password??</span>
        </Link>
      </div>
            <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Sign Up</button>

        </form>
        
    </div>
)
}
