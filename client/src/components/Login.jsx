import React from "react";
import "./login.css"

function Login() {
  return (
    <div className="login-container">
      <div className="login-backgroud">
        <div className="login-form">
          <h2>Make easy Payments</h2>
          <form action="" id="login" >
            <input type="text" />
            <input type="password" />
            <button>Login</button>
          </form>
          <p>Forgort you password?</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
