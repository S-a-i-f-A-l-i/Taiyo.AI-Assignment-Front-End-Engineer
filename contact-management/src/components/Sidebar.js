import React from "react";
import NavLinks from "./NavLinks";
import styles from "./Sidebar.module.css";
const Sidebar = () => {
  return (
    <div>
      <div className={styles.content}>
        <NavLinks />
      </div>
    </div>
  );
};

export default Sidebar;
