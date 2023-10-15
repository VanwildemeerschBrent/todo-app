import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Protected = () => {
  const navigate = useNavigate();
  const isAuthenticated = false;

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  });
  
  return <Outlet />;
};

export default Protected;
