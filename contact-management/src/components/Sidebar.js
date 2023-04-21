import React from "react";
import NavLinks from "./NavLinks";
import styles from "./Sidebar.module.css";
const Sidebar = () => {
  return (
    <div
    //   className={
    // showSidebar ? "sidebar-container" : "sidebar-container show-sidebar"
    //   }
    >
      <div className={styles.content}>
        <img src="../../public/logo192.png" alt="logo-img" />
        <NavLinks />
      </div>
    </div>
  );
};

export default Sidebar;
