import React from "react";
import "./sidebar.css";
import SidebarList from "./SidebarList";

const Navbar = ({ toggleTheme, theme }) => {
  return (
    <div className="container-fluid sidebar-section">
        <div className="sidebar">
          <SidebarList />
        </div>
    </div>
  );
};

export default Navbar;
