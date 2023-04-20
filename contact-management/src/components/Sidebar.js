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
        <NavLinks />
      </div>
    </div>
  );
};

export default Sidebar;
