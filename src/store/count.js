import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const countSliceName = "count";

export const initialState = 0;

export const INCREMENT = "count/increment";
export const RESET = "count/reset";

export const countSlice = createSlice({
  name: countSliceName,
  initialState,
  reducers: {
    [INCREMENT]: (state) => {
      return state + 1;
    },
    [RESET]: () => {
      return initialState;
    }
  },
});

export const increment = countSlice.actions[INCREMENT];
export const reset = countSlice.actions[RESET];

export const useCount = () => {
  return useSelector((state) => state[countSliceName]);
}

export const getCount = (state) => {
  return state[countSliceName];
}
