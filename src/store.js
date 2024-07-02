import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth/auth-slice";
import messageReducer from "./slices/message/message-slice";
const reducer = {
  auth: authReducer,
  message: messageReducer,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
