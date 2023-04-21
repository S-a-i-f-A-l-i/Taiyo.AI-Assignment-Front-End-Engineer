import React from "react";
import { useSelector } from "react-redux";
import OneContact from "./OneContact";

const ShowContacts = () => {
  const contacts = useSelector((store) => store.contacts);
  if (contacts && contacts.length === 0) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          width: "300px",
          border: "2px solid black",
          padding: "5px",
        }}
      >
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
    <div>
      {contacts &&
        contacts.map((el) => {
          return <OneContact {...el} key={el.id} />;
        })}
    </div>
  );
};

export default ShowContacts;
