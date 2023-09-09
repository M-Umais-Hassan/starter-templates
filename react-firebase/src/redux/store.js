import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import authReducer from "./auth";

const combineReducers = {
  authReducer
};

const store = configureStore({
  reducer: combineReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});

export default store;
