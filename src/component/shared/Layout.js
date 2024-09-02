import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import Major from "./major";

function Layout() {
  return (
    <>
      <Header></Header>
      <Major>
        <Outlet></Outlet>
      </Major>
      <Footer></Footer>
    </>
  );
}

export default Layout;
