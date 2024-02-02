import React from "react";

import { Link } from "react-router-dom";
const Navbar = (props) => {
  const isLogged = props.isLogged;
  const setisLogged = props.setisLogged;

  return (
    <div className="flex bg-white justify-center shadow ">
      <div className="flex text-m  py-4 px-4   text-black font-medium flex-1 justify-between items-center">
        <ul className="flex flex-1 justify-evenly   items-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="flex flex-1  items-center  justify-end pr-[17px]">
          {isLogged && (
            <Link to="/">
              <button
                className="mx-3 hover:border-1 hover:border-black"
                onClick={() => setisLogged(false)}
              >
                Log Out
              </button>
            </Link>
          )}
          {isLogged && (
            <Link to="/dashboard">
              <button className="mx-3 hover:border-1 hover:border-black">
                Dashboard
              </button>
            </Link>
          )}
          {!isLogged && (
            <Link to="/login">
              <button className="mx-3 hover:border-y hover:border-y-black">
                Log In
              </button>
            </Link>
          )}
          {!isLogged && (
            <Link to="/signup">
              <button className="mx-3 hover:border-y hover:border-y-black">
                Sign Up
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
