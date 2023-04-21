import React from "react";
import { Link } from "react-router-dom";
import styles from "./OneContact.module.css";
const OneContact = ({ firstName, lastName, status, id }) => {
  return (
    <div className={styles.Wrapper}>
      <div>
        <h1>Name: {firstName + " " + lastName}</h1>
        <h3>
          Status : <span>{status}</span>
        </h3>
      </div>
      <Link to={`/edit/${id}`}>Edit</Link>
      <button>Delete</button>
    </div>
  );
};

export default OneContact;
