import {
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
} from "../actions/actions";

let initialStore = {
  contacts: JSON.parse(localStorage.getItem("contacts")) || [],
};

const contactReducer = (state = initialStore, action) => {
  console.log("contactReducer is called");
  if (action.type === ADD_CONTACT) {
    return {
      ...initialStore,
      contacts: initialStore.contacts.push({
        id: action.payload.id,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        status: action.payload.status,
      }),
    };
  }
  if (action.type === UPDATE_CONTACT) {
    // return contacts.push(action.payload);
  }
  if (action.type === DELETE_CONTACT) {
    // return contacts.push(action.payload);
  }
  return state;
};

export default contactReducer;
