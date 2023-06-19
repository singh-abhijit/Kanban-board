import React from "react";
import { AppBar, SideBar } from "../components";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <AppBar />
      <div className="layout-content">
        <SideBar />
        <div className="container mt-10">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
