import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  dashLocation: "Home",
  dollarCardState: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLocation: (state, { payload }) => {
      state.dashLocation = payload;
    },
    setDollarCardState: (state) => {
      state.dollarCardState = true;
    },
  },
});
export const { setLocation, setDollarCardState } = authSlice.actions;
export default authSlice.reducer;
