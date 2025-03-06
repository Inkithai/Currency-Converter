import React from "react";
import Router from "../router/Router";
import Navbar from "../components/NavBar/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Router />
    </div>
  );
};

export default Layout;