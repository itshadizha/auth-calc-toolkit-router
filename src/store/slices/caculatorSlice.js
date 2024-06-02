import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    plus(state, action) {
      state.count += action.payload;
    },
    minus(state, action) {
      state.count -= action.payload;
    },
    divide(state, action) {
      state.count /= action.payload;
    },
    multiply(state, action) {
      state.count *= action.payload;
    },
  },
});

export const { plus, minus, divide, multiply } = calculatorSlice.actions;

export default calculatorSlice.reducer;
