import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavLinks.module.css";
import logo from "./images/logo192.png";

const NavLinks = () => {
  return (
    <div className={styles.navLinks}>
      <img className={styles.image} src={logo} alt="logo-img" />

      <NavLink to="/">Contact</NavLink>
      <NavLink to="/charts-and-maps">Charts & Maps</NavLink>
    </div>
  );
};

export default NavLinks;
