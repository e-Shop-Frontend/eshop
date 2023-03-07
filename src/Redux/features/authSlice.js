import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const baseUrl = `https://api.eshopafrica.co/api/v1/`;
const initialState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserProfile: (state, { payload }) => {
      state.user = payload;
    },
    setToken: (state, { payload }) => {
      state.token = payload;
    },
  },
});
export const { setUserProfile, setToken } = authSlice.actions;
export default authSlice.reducer;
