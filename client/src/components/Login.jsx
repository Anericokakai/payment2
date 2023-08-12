import React from "react";
import "../components/scss/login.scss";
import { login } from "../helpers/loginHelper";


function Login() {

  const handleSubmit =  async (e) => {
    e.preventDefault();
    const form = document.querySelector('form');

    await login(form).then((reponse)=>{
        console.log(reponse);
    })
  };

  return (
    <div className="login-container">
      <div className="login-child">
        <div className="heading">
          <h2>Welcome Back</h2>
        </div>
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <h3>Login</h3>
            <input name="email" type="email" placeholder="email" />
            <input name="password" type="password" placeholder="password" />
            <button type="submit">Log in</button>
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="/create"
            >
              Don't have an account? Create new
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
