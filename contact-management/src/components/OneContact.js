import React from "react";
import { Link } from "react-router-dom";
import styles from "./OneContact.module.css";
import { deleteContactAction } from "../redux/actions/actions";
import { useDispatch } from "react-redux";
const OneContact = ({ firstName, lastName, status, id }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    try {
      deleteContactAction(id, dispatch);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.Wrapper}>
      <div>
        <h1>Name: {firstName + " " + lastName}</h1>
        <h3>
          Status : <span>{status}</span>
        </h3>
      </div>
      <Link to={`/edit/${id}`}>Edit</Link>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
};

export default OneContact;
