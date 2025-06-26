import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const toLogin = () => {
    window.location.href = "http://localhost:3000/login";
  };
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );

      const { success, message } = data;

      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          toLogin();
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }

    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="container p-3 p-sm-5 text-center">
      <div className="center-wrapper">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-12 col-sm-7">
            <img
              src="images\signup.png"
              alt=""
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-sm-5 p-3 p-sm-5 pt-sm-0">
            <p className="blockquote-footer" style={{ textAlign: "center" }}>
              <em>if you are a visitor and dont want to signup</em>
            </p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={toLogin}
            >
              Guest Login
            </button>
            <hr />
            <h2 className="text-center">Signup</h2>
            <div className="d-flex justify-content-center">
              <div className="mt-4 text-center">
                <input
                  className="mb-4 p-2 text-muted"
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Email"
                  onChange={handleOnChange}
                />
                <br />
                <input
                  className="mb-4 p-2 text-muted"
                  type="text"
                  name="username"
                  value={username}
                  placeholder="Username"
                  onChange={handleOnChange}
                />
                <br />
                <input
                  className="mb-4 p-2 text-muted"
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Password"
                  onChange={handleOnChange}
                />
                <br />
                <button type="submit" className="mx-auto btn btn-primary mb-5">
                  Submit
                </button>
                <p>
                  Already have an account? <Link to={"/login"}>Login</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;