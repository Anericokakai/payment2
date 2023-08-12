import axios from "axios";

// ! helper for creating new account
export const create = async (form) => {
  const mediumPass = new RegExp(
    "((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))"
  );

  //  get data from the form
  const form_data = new FormData(form);
  const username = form_data.get("username");
  const email = form_data.get("email");
  const password = form_data.get("password");

  //  check email and password validity
  if (!username || !email || !password) {
    return "All inputs required";
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    return "Email must be valid";
  }
  if (!mediumPass.test(password)) {
    return "password not strong";
  }

  //  post data to database
  const values = {
    username: username,
    email: email,
    password: password,
  };
  try {
    const response = await axios.post(
      "http://localhost:8000/api/v1/create",
      values
    );
    return response;
  } catch (error) {
    return error;
  }
};

// ! helper to login in to account
export const login = async (form) => {
    
  const form_data = new FormData(form);
  // console.log(...form_data);
  const email = form_data.get("email");
  const password = form_data.get("password");

  const values = {
    email: email,
    password: password,
  };
  console.log(values);

  try {
    const response = await axios.post(
      "http://localhost:8000/api/v1/login",
      values
    );
    return response;
  } catch (error) {
    return error;
  }
};
