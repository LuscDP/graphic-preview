import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  boxPosition: {
    x: 50,
    y: 50,
  },
};

const boxPositionSlice = createSlice({
  name: "boxPosition",
  initialState,
  reducers: {
    setBoxPosition: (state, action) => {
      state.boxPosition = action.payload;
    },
  },
});

export const { setBoxPosition } = boxPositionSlice.actions;

export default boxPositionSlice.reducer;
