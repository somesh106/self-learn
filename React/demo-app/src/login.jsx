import axiosInstance from "./axiosInstance.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axiosInstance.post("/auth/login", {
        username: email,
        password,
      });
      // console.log(res.data);
      localStorage.setItem("token", res.data.accessToken);
      props.setToken(res.data.accessToken);

      navigate("/order");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
      console.log(error.response?.data);
    }
  };

  return (
    <div className="container mt-5">
      <div className="input-group mb-3">
        <div className="input-group-prepend"></div>
        <input
          type="text"
          value={email}
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="input-group mb-3">
        <div className="input-group-prepend"></div>
        <input
          type="password"
          value={password}
          placeholder="Password"
          aria-label="Password  "
          aria-describedby="basic-addon1"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;
