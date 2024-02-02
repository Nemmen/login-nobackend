import React from 'react'
import Template from './Template'

const Login = (props) => {
  const setisLogged = props.setisLogged;
  return (
    <Template
    setisLogged={setisLogged}
    formtype="login"
    />
  )
}

export default Login