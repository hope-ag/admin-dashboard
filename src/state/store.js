import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "./authentication/authenticationSlice";

export const store = configureStore({
  reducer: {
    authenticationReducer,
  },
});

export default store;
