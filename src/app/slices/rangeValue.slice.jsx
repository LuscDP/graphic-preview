import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: 1,
};

export const rangeValueSlice = createSlice({
  name: 'rangeValue',
  initialState,
  reducers: {
    changeRangeValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {changeRangeValue} = rangeValueSlice.actions;

export const selectRangeValue = (state) => state.rangeValue.value;

export default rangeValueSlice.reducer;