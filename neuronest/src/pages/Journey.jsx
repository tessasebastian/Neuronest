import React from 'react';
import { Link } from 'react-router-dom';

export default function LogUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>We're here to help</h1>
      <form className='flex flex-col gap-4'>
        <label>Name*</label>
        <input type="text"  className='border p-3 rounded-lg' id='username' /><br/>
        <label>Email*</label>
        <input type="email" className='border p-3 rounded-lg' id='email' /><br/>
        <label>Password*</label>
        <input type="password" className='border p-3 rounded-lg' id='password' /><br/>
        <label >Professional/Parent*</label>
        <select name="" id="" className='border p-3 rounded-lg bg-white'>
            <option value="parent">Parent</option>
            <option value="professional">Professional</option>
        </select>
        <label>Message*</label>
        <textarea name="message" id=""></textarea>
        {/*<input type="" className='border p-3 rounded-lg' id='password' /><br/>*/}
       
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Submit</button>
      </form>
      
    </div>

  )
}
