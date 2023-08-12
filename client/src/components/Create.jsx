import React from "react";
import "../components/scss/login.scss";
import { create } from "../helpers/loginHelper";

function Create() {
  // ! get form inputs
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = document.querySelector('form');
    await create(form).then((res) => {
      const response = res;
      console.log(response);
    });
  };

  return (
    <div className="login-container">
      <div className="login-child">
        <div className="heading">
          <h2>Join Us</h2>
        </div>
        <div className="login-form">
          <form onSubmit={handleSubmit} >
            <input name="username" type="text" placeholder="username" />
            <input name="email" type="email" placeholder="email" />
            <input name="password" type="password" placeholder="password" />
            <button type="submit" >Create account</button>
            <a style={{ textDecoration: "none", color: "white" }} href="/login">
              Have an acoount? Login
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Create;
