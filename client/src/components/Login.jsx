import React from 'react'
import "../components/scss/login.scss"
import {login } from "../helpers/loginHelper"

function Login() {

  // ! get form inputs
  const form = document.querySelector('form');


const handleClick = async (e) =>{
  e.preventDefault();
  await login(form).then((res)=>{
    const response = res;
    console.log(response);
  })
  
}

  return (
    <div className="login-container">
      <div className="login-child">
      <div className="heading">
    <h2>Welcome to the Payment app</h2>
      </div>
      <div className="login-form">
    <form action="">
      <input name='username' type="text" placeholder='username' />
      <input name='email' type="email"  placeholder='email'/>
      <input name='password' type="password" placeholder='password' />
      <button  onClick={handleClick} >Create account</button>
      <p>Have an acoount? Login</p>
    </form>
      </div>
      </div>
    </div>
  )
}

export default Login