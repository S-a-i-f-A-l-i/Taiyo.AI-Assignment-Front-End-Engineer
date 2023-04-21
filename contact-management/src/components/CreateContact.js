import React, { useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { ADD_CONTACT } from "../redux/actions/actions";
import contactReducer from "../redux/reducers/contactReducer";
import { useSelector } from "react-redux";
const CreateContact = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    status: "",
  });
  const contacts = useSelector((store) => store.contacts);
  const [reducerState, dispatch] = useReducer(contactReducer, state);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, status } = state;
    try {
      dispatch({
        type: ADD_CONTACT,
        payload: {
          id: contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 1,
          firstName,
          lastName,
          status,
        },
      });
      localStorage.setItem("contacts", JSON.stringify(contacts));
      setTimeout(() => {
        navigate("/");
      }, 100);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Create Contact Screen</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={state.firstName}
            onChange={(e) =>
              setState({ ...state, [e.target.name]: e.target.value })
            }
          />
          <br />
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            onChange={(e) =>
              setState({ ...state, [e.target.name]: e.target.value })
            }
          />
          <div>
            <label>Status:</label>
            <div>
              <input
                type="radio"
                name="status"
                onChange={(e) =>
                  setState({ ...state, [e.target.name]: "Active" })
                }
              />
              <label>Active</label>
              <br />
              <input
                type="radio"
                name="status"
                onChange={(e) =>
                  setState({ ...state, [e.target.name]: "Inactive" })
                }
              />
              <label>Inactive</label>
            </div>
          </div>
          <button
            disabled={!state.firstName || !state.lastName || !state.status}
          >
            Save Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateContact;
