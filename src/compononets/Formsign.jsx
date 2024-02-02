import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

const Formsign = (props) => {
  const setisLogged = props.setisLogged;
  const [val, setval] = useState("");
  const [val1, setval1] = useState("");
  const [eye, seteye] = useState(false);
  const [eye1, seteye1] = useState(false);

  const navigate = useNavigate();
  const [formd, setformd] = useState({
    email: "",
    password: "",
    confirmpassword:"" ,
    first:"",
    last:""
  });
  const seye = () => {
    seteye(!eye);
  };
  const seye1 = () => {
    seteye1(!eye1);
  };

  const chang = () => {
    setval(() => Math.floor(Math.random() * 600 + 1));
    setval1(() => Math.floor(Math.random() * 600 + 1));
  };

  const submithandle = (event) => {
    event.preventDefault()
    if(formd.password == formd.confirmpassword){
      console.log("this is your data , " + formd);
    navigate("/dashboard");
    toast.success("You are logged in");
    setisLogged((prev) => !prev);
    }else{
      toast.error('Password does not match');
    }
  };
  const changehandle = (event) => {
    setformd((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };
  return (
    <form className="mt-6" onSubmit={submithandle}>
      <input type='text' required onChange={changehandle} value={formd.first} name="first" placeholder="First Name" className="bg-black text-white border text-[17px] mt-3 border-white rounded  pl-2 w-[120px]"/>&nbsp;
      <input type='text' required onChange={changehandle} value={formd.last}  name="last" placeholder="last Name" className="bg-black text-white border text-[17px] mt-3 border-white rounded  pl-2 w-[120px]"/>
      <br/> 
    
      <label className="text-xl">
        Email
        <br />
        <input
          required
          className="bg-black text-white border text-[17px] mt-3 border-white rounded  pl-2 pr-7"
          onChange={changehandle}
          type="email"
          value={formd.email}
          name="email"
        />
      </label>
      <br />
     
      <label className="text-xl">
        Password
        <br />
        <input
          required
          className="bg-black text-white border text-[17px] mt-3 border-white rounded pl-2 pr-7"
          onChange={changehandle}
          type={eye ? "text" : "password"}
          value={formd.password}
          name="password"
        />
        <span className=" relative top-[-26px] left-[210px] "> 
          {eye ? <FaRegEyeSlash onClick={seye} /> : <FaRegEye onClick={seye} />}
        </span>
      </label>
      
      <label className="text-xl">
        Confirm Password
        <br />
        <input
          required
          className="bg-black text-white border text-[17px] mt-3 border-white rounded pl-2 pr-7"
          onChange={changehandle}
          type={eye1 ? "text" : "password"}
          value={formd.confirmpassword}
          name="confirmpassword"
        />
        <span className=" relative top-[-26px] left-[210px] "> 
          {eye1 ? <FaRegEyeSlash onClick={seye1} /> : <FaRegEye onClick={seye1} />}
        </span>
      </label>
      <div className="mt-[20px]">
        <button className=" border-y  border-white rounded py-2 px-3">
          submit
        </button>
        <button
          onMouseOver={chang}
          className={`border-y ml-6  border-white rounded py-2 px-3 absolute  `}
          style={{ top: val, left: val1 }}
        >
          don't wanna logg in??
        </button>
      </div>
    </form>
  )
}

export default Formsign