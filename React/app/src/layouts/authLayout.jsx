import React from "react";
import { Outlet } from "react-router-dom";
import "./authLayout.css";
import onlineShopping from "../assets/images/onlineShopping.png";

const AuthLayout = () => {
  return (
    <div
      className="auth-layout"
      style={{
        backgroundImage: `url(${onlineShopping})`,
      }}
    >
      <div className="auth-content-section">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;