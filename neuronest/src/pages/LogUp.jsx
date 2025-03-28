import React from 'react';
import { Link } from 'react-router-dom';

export default function LogUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>parent Sign Up</h1>
      <form className='flex flex-col gap-4'>
        <label>Name*</label>
        <input type="text"  className='border p-3 rounded-lg' id='username' /><br/>
        <label>Phone Number*</label>
      <div className="flex items-center bg-white border p-3 rounded-lg">
        <span className="text-black">+91</span>
        <input
          placeholder="Enter your number"
          type="number"
          className="outline-none flex-1 ml-2"
          id="phonenumber"
        />
      </div>
        <label>Email*</label>
        <input type="email" className='border p-3 rounded-lg' id='email' /><br/>
        <label>Password*</label>
        <input type="password" className='border p-3 rounded-lg' id='password' /><br/>
        <label >Professional/Parent*</label>
        <select name="" id="" className='border p-3 rounded-lg bg-white'>
            <option value="parent">Parent</option>
            <option value="professional">Professional</option>
        </select>
       
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Sign In</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an Account??</p>
        <Link to={'/log-in'}>
        <span className='text-blue-700'>Sign In</span>
        </Link>
      </div>
    </div>

  )
}
