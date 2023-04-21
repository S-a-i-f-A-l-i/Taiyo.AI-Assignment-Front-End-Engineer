import React from "react";
import Form from "./Form";
import { useParams } from "react-router-dom";

const CreateContact = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Edit Contact Screen</h1>
      <Form id={id} />
    </div>
  );
};

export default CreateContact;
