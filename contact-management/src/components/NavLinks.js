import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavLinks.module.css";

const NavLinks = () => {
  return (
    <div className={styles.navLinks}>
      <NavLink to="/">Contact</NavLink>
      <NavLink to="/charts-and-maps">Charts & Maps</NavLink>
    </div>
  );
};

export default NavLinks;
