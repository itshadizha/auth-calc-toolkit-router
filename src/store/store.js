import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slices/loginSlice";
import caculatorSlice from "./slices/caculatorSlice";

export const store = configureStore({
  reducer: {
    login: loginSlice,
    calculator: caculatorSlice,
  },
});
