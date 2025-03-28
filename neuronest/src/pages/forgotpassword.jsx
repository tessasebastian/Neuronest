import React from 'react'
import parentlogin from './parentlogin.svg'


export default function () {
  return (
     <div className='p-3 max-w-lg mx-auto mt-44 '>
          <h1 className='text-3xl text-center font-semibold my-7'>Lets help you recover your account</h1>
          <div><img className=' h-80 w-96 absolute top-56 left-8' src={parentlogin} alt="therapist img" /></div>
            <form className='flex flex-col gap-4'>
                <label>Phone number*</label>
                <input type="phonenumber" className='border p-3 rounded-lg' id='phonenumber' /><br/>
                <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Send OTP</button>

                </form>
            </div>
  )
}
