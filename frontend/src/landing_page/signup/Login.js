import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [inputValue, setInputValue] = useState({ email: "", password: "" });

  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleError = (err) => toast.error(err, { position: "bottom-left" });
  const handleSuccess = (msg) => toast.success(msg, { position: "bottom-left" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:3002/login", { email, password }, { withCredentials: true });
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => (window.location.href = "http://localhost:3001/"), 1000);
        setInputValue({ email: "", password: "" });
      } else handleError(message || "Invalid credentials");
    } catch (error) {
      handleError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container p-3 p-sm-5 text-center">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-12 col-sm-7"><img src="images/signup.png" alt="Login" style={{ width: "100%" }} /></div>
          <div className="col-12 col-sm-5 p-3 p-sm-5">
            <h2 className="text-center">Login</h2>
            <div className="d-flex justify-content-center">
              <div className="mt-4 text-center">
                <input className="mb-4 p-2 text-muted" type="email" name="email" value={email} placeholder="Enter your email" onChange={handleOnChange} required /><br />
                <input className="mb-4 p-2 text-muted" type="password" name="password" value={password} placeholder="Enter your password" onChange={handleOnChange} required /><br />
                <button type="submit" className="mx-auto btn btn-primary mb-5">Submit</button>
                <p>Don't have an account? <Link to="/signup">Signup</Link></p>
              </div>
            </div>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;