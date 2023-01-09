import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  dashLocation: "Home",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLocation: (state, { payload }) => {
      state.dashLocation = payload;
    },
  },
});
export const { setLocation } = authSlice.actions;
export default authSlice.reducer;
