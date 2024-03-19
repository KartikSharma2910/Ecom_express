import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("ecom_access");

  return token ? children : <Navigate to="/sign-in" />;
};

export default PrivateRoute;
