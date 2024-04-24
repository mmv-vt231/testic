import React from "react";
import { Outlet } from "react-router-dom";
import { useAuthorizeQuery } from "@store/services/api";

function RootLayout() {
  const token = localStorage.getItem("token");

  const { isLoading } = useAuthorizeQuery(null, { skip: !token });

  if (token && isLoading) {
    return null;
  }

  return <Outlet />;
}

export default RootLayout;
