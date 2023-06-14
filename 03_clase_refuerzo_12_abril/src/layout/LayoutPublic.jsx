import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../componets/nav/Nav";
import Footer from "../componets/footer/Footer";

const LayoutPublic = () => {
  return (
    <div>
      <Nav />
      <hr />
      <Outlet />
      <hr />
      <Footer />
    </div>
  );
};

export default LayoutPublic;
