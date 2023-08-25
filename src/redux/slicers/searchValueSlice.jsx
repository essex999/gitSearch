import { createSlice } from "@reduxjs/toolkit";

const valueSlice = createSlice({
  name: "value",
  initialState: "",
  reducers: {
    setValue: (state, action) => {
      return action.payload;
    },
  },
});

export const { setValue } = valueSlice.actions;
export default valueSlice.reducer;
