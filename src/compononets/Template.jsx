import React from 'react'
import Formsign from './Formsign'
import Formlogin from './Formlogin'
import { imggg }  from "../img"

const Template = (props) => {
    const formtype= props.formtype
    const isLogged = props.isLogged;
    const setisLogged = props.setisLogged;
  
  return (
    <div className='flex w-full text-white h-[550px] flex-1 justify-around '>
        <div className='mt-[70px]'>
            <h3 className='text-2xl '>
                Here to <span className='text-4xl'>Get into?....</span>
            </h3>
      
            {
                formtype === 'login' ? (<Formlogin isLogged ={isLogged} setisLogged={setisLogged} />):(<Formsign isLogged ={isLogged} setisLogged={setisLogged}/>)
            }
        </div>
        <div className='mt-[100px]'>
            <img className='w-[500px]' src={imggg}     ></img>
        </div>
    </div>
  )
}

export default Template