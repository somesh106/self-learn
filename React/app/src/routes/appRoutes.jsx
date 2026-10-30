import React from "react";
import Login from "../pages/authentication/login.jsx";
import AuthLayout from "../layouts/authLayout.jsx";
import { Navigate, useRoutes } from "react-router-dom";
import Dashboard from "../pages/dashboard/dashboard.jsx";
import DashboardLayout from "../layouts/dashBoardLayout.jsx";
import { Product } from "../pages/products/product.jsx";
import { UserDetails } from "../pages/users/userDetails.jsx";
import { EditUserDetails } from "../pages/users/editUserDetails.jsx";
import { ProductDetail } from "../pages/products/productDetail.jsx";

export default function AppRoutes() {
  const token = localStorage.getItem("token");
  const routes = useRoutes([
    // Protected Routes
    {
      element: !token ? <Navigate to="/login" replace /> : <DashboardLayout />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "wishlist",
          element: <Product />,
        },
        {
          path: "productDetail/:id",
          element: <ProductDetail />,
        },
        {
          path: "/userDetails",
          element: <UserDetails />,
        },
        {
          path: "/editUserDetails",
          element: <EditUserDetails />,
        },
      ],
    },

    // Public Routes
    {
      // path: "/",
      element: token ? <Navigate to="/dashboard" replace /> : <AuthLayout />,
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
  ]);

  return routes;
}
