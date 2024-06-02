import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogged: localStorage.getItem("isLogged") === "true" || false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    toggleLogged(state) {
      state.isLogged = !state.isLogged;
      localStorage.setItem("isLogged", state.isLogged);
    },
  },
});

export const { toggleLogged } = loginSlice.actions;

export default loginSlice.reducer;
