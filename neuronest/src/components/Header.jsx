//import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import neuronestlogo from './neuronestlogo.png'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
    <div className="flex justify-between items-center w-full max-w-6xl mx-auto pl-28 py-3">
      {/* Logo Section */}
      <div className="flex-shrink-0 ml-[-16px] ">
        <Link to="/">
        {/*<div className='ml-[-100px]'>
        </div>*/}
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap mx-0">
          <img className='ml-[-230px] ' src='' alt="" />
            <span className="text-slate-700 text-3xl">𝙉</span>
            <span className="text-slate-500 text-2xl">eu</span>
            <span className="text-slate-700 text-3xl">Ꮢ</span>
            <span className="text-slate-500 text-2xl">on</span>
            <span className="text-slate-700 text-3xl">E</span>
            <span className="text-slate-500 text-2xl">st</span>
          </h1>
        </Link>
      </div>
  
      {/* Navigation Links */}
      <div className="hidden sm:block">
        <ul className="flex gap-10 justify-center">
          <Link to="/">
            <li className="text-slate-700 hover:underline text-lg">Home</li>
          </Link>
          <Link to="/about">
            <li className="text-slate-700 hover:underline text-lg">About</li>
          </Link>
          <Link to="/profile">
            <li className="text-slate-700 hover:underline text-lg">Profile</li>
          </Link>
          <Link to="/log-up">
            <li className="text-slate-700 hover:underline text-lg">Parent SignUp</li>
          </Link>
          <Link to="/sign-up">
            <li className="text-slate-700 hover:underline text-lg">Therapist SignUp</li>
          </Link>
        </ul>
      </div>
  
      {/* Buttons Section */}
      <div className="flex space-x-4 mr-0">
        <Link to="/log-in">
          <button className="bg-slate-700 text-white p-3 rounded-lg hover:opacity-70">
            Parent SignIn
          </button>
        </Link>
  
        <Link to="/sign-in">
          <button className="bg-slate-700 text-white p-3 rounded-lg hover:opacity-70">
            Professional SignIn
          </button>
        </Link>
      </div>
    </div>
  </header>

  )
}
