import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'authentication',
  initialState: {
    user: null,
    loginStatus: false
  },
  reducers: {
    success: (state, action) => {
      state.user = action;
      state.loginStatus = true;
    },
    error: state => {
      state.user = null;
      state.loginStatus = false;
    }
  }
});

export const { logIn, success, error } = slice.actions;

export const selectUser = state => state.authentication.user;
export const selectLoginStatus = state => state.authentication.loginStatus;

export default slice.reducer;
