
import './App.css';
import Navbar from './compononets/Navbar'
import { Route , Routes } from 'react-router-dom';
import Home from './compononets/Home';
import About from './compononets/About';
import Dashboard from './compononets/Dashboard';
import { useState } from 'react'
import Login from './compononets/Login';
import Signup from './compononets/Signup';
import Contact from './compononets/Contact';

function App() {
  const [isLogged , setisLogged] = useState(false)

  return (
    <div className='' >
      
       <Navbar isLogged ={isLogged} setisLogged={setisLogged} />
       <Routes >
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/login' element={<Login  isLogged ={isLogged} setisLogged={setisLogged}/>} />
        <Route path='/signup' element={<Signup  setisLogged={setisLogged}/>} />
        <Route path='/contact' element={<Contact />} />
        
       </Routes>
       
    </div>
  );
}

export default App;
