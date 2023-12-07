import { configureStore } from "@reduxjs/toolkit";
import boxPosition from "./slices/boxPosition.slice";
import rangeValue from "./slices/rangeValue.slice";

export const store = configureStore({
  reducer: {
    boxPosition,
    rangeValue,
  },
});