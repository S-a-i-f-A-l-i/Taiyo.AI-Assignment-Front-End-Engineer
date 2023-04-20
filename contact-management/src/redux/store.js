import { legacy_createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import contactReducer from "./reducers/contactReducer";

const store = legacy_createStore(contactReducer, applyMiddleware(logger));

export default store;
