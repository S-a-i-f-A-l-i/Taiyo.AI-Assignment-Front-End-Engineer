import React from "react";
import { Link } from "react-router-dom";
import ShowContacts from "./ShowContacts";

const Contact = () => {
  return (
    <div>
      <h3>Contact Page</h3>
      <Link to="/create">Create Contact</Link>
      {/* <CreateContact /> */}
      <ShowContacts />
    </div>
  );
};

export default Contact;
