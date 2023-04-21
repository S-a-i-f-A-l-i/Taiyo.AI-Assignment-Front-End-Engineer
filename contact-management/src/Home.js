import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <main className={styles.container}>
      <div className={styles.LeftContainer}>
        <Sidebar />
      </div>
      <div>
        <div className={styles.RightContainer}>
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default Home;
