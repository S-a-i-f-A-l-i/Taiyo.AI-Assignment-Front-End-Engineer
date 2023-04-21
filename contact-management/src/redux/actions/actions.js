export const ADD_CONTACT = "ADD_CONTACT";
export const EDIT_CONTACT = "EDIT_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";

export const addContactAction = (state, dispatch) => {
  dispatch({
    type: ADD_CONTACT,
    payload: state,
  });
};
export const editContactAction = (state, dispatch) => {
  dispatch({
    type: EDIT_CONTACT,
    payload: state,
  });
};
export const deleteContactAction = (state, dispatch) => {
  dispatch({
    type: DELETE_CONTACT,
    payload: {
      id: state,
    },
  });
};
