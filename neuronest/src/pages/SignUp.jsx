import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'



export default function SignUP() {

  const[name,setName] =useState()
  const[phonenumber,setPhoneNumber] =useState()
  const[email,setEmail] =useState()
  const[password,setPassword] =useState()
  const[professional,setProfessional] =useState()

  const handleSubmit = (e) =>{
    e.preventDefault()
    axios.post('https://localhost:3001/signup' , {name,phonenumber,email,password,professional})
    .then(result => console.log(result))
    .catch(err=> console.log(err))
  }  

  return (
    <div className='p-3 max-w-lg mx-auto'>
    <h1 className='text-3xl text-center font-semibold my-7'>Therapist Sign Up</h1>

    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
      <label>Name*</label>
      <input type="text" className='border p-3 rounded-lg' id='username' /><br/>
      onChange={(e) => setName(e.target.value)}

  
      <label>Phone Number*</label>
      <div className="flex items-center bg-white border p-3 rounded-lg">
        <span className="text-black">+91</span>
        <input
          placeholder="Enter your number"
          type="number"
          className="outline-none flex-1 ml-2"
          id="phonenumber"
        />
        onChange={(e) => setPhoneNumber(e.target.value)}

      </div><br/>
  
      <label>Email*</label>
      <input type="email" className='border p-3 rounded-lg' id='email' /><br/>
      onChange={(e) => setEmail(e.target.value)}
      
      <label>Password*</label>
      <input type="password" className='border p-3 rounded-lg' id='password' /><br/>
      
      <label>Professional/Parent*</label>
      <select name="" id="" className='border p-3 rounded-lg bg-white'>
        <option value="parent">Parent</option>
        <option value="professional">Professional</option>
      </select>
      onChange={(e) => setProfessional(e.target.value)}

  
      <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Sign In</button>
    </form>
    <div className='flex gap-2 mt-5'>
      <p>Have an Account?</p>
      <Link to={'/sign-in'}>
        <span className='text-blue-700'>Sign In</span>
      </Link>
    </div>
  </div>
  
  )
}
