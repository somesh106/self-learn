import React, { useState } from "react";
import { Input } from "../../components/input";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { authLogin } from "../../services";
import { useDispatch } from "react-redux";
import { setToken, setUserInfo } from "../../redux/authSlice";

const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState("");
  const [formData, setFormData] = useState({
    username: "",                              //to manage controlled component
    password: "",                              //it will not be undefined
    rememberMe: false
  });

  const [errors, setErrors] = useState({});   //to store validation error msg

  const handleLoginChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const validateUsername = (username) => {
    return /^[a-zA-Z0-9_]{3,20}$/.test(username);
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Username is required.";
    }
    else if (!validateUsername(formData.username)) {
      newErrors.username = "Username must contain 3 to 20 characters."
    }

    if (!formData.password) {
      newErrors.password = "Password is required."
    }
    else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters."
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const handleLogin = async (e) => {
    e.preventDefault();                  //stop the default submit behaviour of form

    if (!validateForm()) {
      return;
    }

    const payload = {
      username: formData.username,
      password: formData.password,
    };

    try {
      const result = await authLogin(payload);

      // console.log("Full API Result:", result);

      //API Login
      const user = {
        firstName: result.firstName,
        lastName: result.lastName,
        image: result.image,
        gender: result.gender,
        id: result.id,
        email: result.email,
        username: result.username
      };
      // console.log(result);

      dispatch(setUserInfo(user));
      dispatch(setToken(result.accessToken));

      localStorage.setItem("token", result.accessToken);
      // localStorage.setItem("userInfo", JSON.stringify(user));

      navigate("/dashboard");
    } catch (err) {
      console.log("Login Failed:", err);
    }
  };

  return (
    <div className="login-card">
      <div className="login-box">
        <h1 className="login-title fw-semibold mb-2">
          Welcome Back!
        </h1>
        <p className="login-subtitle text-secondary mb-4">
          Enter your Username and Password to Log In!
        </p>

        <form onSubmit={handleLogin}>
          <Input
            type="text"
            label="Email"
            value={formData?.username || ""}
            placeholder="Enter Username"
            isImportant={true}
            name="username"
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value
              }))

              setErrors((prev) => ({
                ...prev,
                username: "",
              }));
            }}
            error={errors.username}
          />

          <Input
            type="password"
            label="Password"
            value={formData?.password || ""}
            placeholder="Enter Password"
            isImportant={true}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            name="password"
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
              setErrors((prev) => ({
                ...prev,
                password: "",
              }));

            }}
            error={errors.password}
          />

          <div className="d-flex justify-content-between align-items-center mt-2">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="remember"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleLoginChange}
              />

              <label className="form-check-label small" htmlFor="remember" >
                Keep me logged in
              </label>
            </div>

            <Link to="/forgot-password" className="text-decoration-none small" >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 rounded-2 mt-4 py-2 fw-medium"
          >
            Login
          </button>

          <p className="text-center text-secondary small mt-4">
            Don't have an account?
            <Link to="/signup" className="ms-1 text-decoration-none fw-medium" >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;