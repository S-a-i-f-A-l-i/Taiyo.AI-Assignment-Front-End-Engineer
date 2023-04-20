import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <main className={styles.container}>
      <Sidebar />
      <div>
        <div className="dashboard-page">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default Home;
