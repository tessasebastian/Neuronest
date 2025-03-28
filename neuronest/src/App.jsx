import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';
import Header from './components/Header';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUP';
import LogIn from './pages/Login';
import LogUp from './pages/LogUp';
import Journey from './pages/Journey';
import Forgotpassword from './pages/forgotpassword';



export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/sign-in' element={<SignIn/>} />  
        <Route path='/sign-up' element={<SignUp/>} />    
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/log-in' element={<LogIn/>} />
        <Route path='/log-up' element={<LogUp/>} />
        <Route path='/journey' element={<Journey/>} />
        <Route path='/forgotpassword' element={<Forgotpassword/>} />
      </Routes>
    </BrowserRouter>
  )
}
