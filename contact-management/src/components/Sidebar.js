import React from "react";
import NavLinks from "./NavLinks";
const Sidebar = () => {
  return (
    <div
    //   className={
    // showSidebar ? "sidebar-container" : "sidebar-container show-sidebar"
    //   }
    >
      <div className="content">
        <img src="../../public/logo192.png" alt="logo-img" />
        <NavLinks />
      </div>
    </div>
  );
};

export default Sidebar;
