import React from 'react'
import Template from './Template'

const Signup = (props) => {
  const setisLogged = props.setisLogged
  return (
    <Template
    setisLogged = {setisLogged}
    formtype="signup"
    />
  )
}

export default Signup