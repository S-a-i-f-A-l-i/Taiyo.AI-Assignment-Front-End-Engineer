import React from "react";
import { useSelector } from "react-redux";
import OneContact from "./OneContact";
import styles from "./ShowContacts.module.css";

const ShowContacts = () => {
  const contacts = useSelector((store) => store.contacts);
  if (contacts && contacts.length === 0) {
    return (
      <div className={styles.empty}>
        <span
          style={{
            border: "2px solid black",
            borderRadius: "50%",
            backgroundColor: "black",
          }}
        >
          ❌
        </span>
        <p>No Contact Found Please add contact from Create Contact Button</p>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      {contacts &&
        contacts.map((el) => {
          return <OneContact {...el} key={el.id} />;
        })}
    </div>
  );
};

export default ShowContacts;
