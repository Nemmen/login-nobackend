import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";


const Formlogin = (props) => {
  const setisLogged = props.setisLogged;
  const [val, setval] = useState("");
  const [val1, setval1] = useState("");
  const [eye, seteye] = useState(false);

  const navigate = useNavigate();
  const [formd, setformd] = useState({
    email: "",
    password: "",
  });
  const seye = () => {
    seteye(!eye);
  };

  const chang = () => {
    setval(() => Math.floor(Math.random() * 600 + 1));
    setval1(() => Math.floor(Math.random() * 600 + 1));
  };

  const submithandle = () => {
    console.log("this is your data , " + formd);
    navigate("/dashboard");
    toast.success("You are logged in");
    setisLogged((prev) => !prev);
  };
  const changehandle = (event) => {
    setformd((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };
  return (
    <form className="mt-6" onSubmit={submithandle}>
      <label className="text-xl">
        Email:
        <br />
        <input
          required
          className="bg-black text-white border text-[17px] mt-3 border-white rounded py-2 pl-2 pr-7"
          onChange={changehandle}
          type="email"
          value={formd.email}
          name="email"
        />
      </label>
      <br />
      <br />
      <label className="text-xl">
        Password
        <br />
        <input
          required
          className="bg-black text-white border text-[17px] mt-3 border-white rounded py-2 pl-2 pr-7"
          onChange={changehandle}
          type={eye ? "text" : "password"}
          value={formd.password}
          name="password"
        />
        <span className=" relative top-[-32px] left-[210px] "> 
          {eye ? <FaRegEyeSlash onClick={seye} /> : <FaRegEye onClick={seye} />}
        </span>
      </label>
      <div className="mt-[50px]">
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
  );
};

export default Formlogin;
