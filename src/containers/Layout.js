import React from "react";
import { AppBar, SideBar } from "../components";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <AppBar />
      <div className="layout-content">
        <SideBar />
        <div className="container">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
