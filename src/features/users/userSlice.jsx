import { createSlice } from "@reduxjs/toolkit";
import { fetchUsersSuccess, fetchUsersFailure } from "./userActions";

const userSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
    loading: false,
    error: null
  },
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersSuccess, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      })
      .addCase(fetchUsersFailure, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  }
});

export const { setLoading } = userSlice.actions;
export default userSlice.reducer;