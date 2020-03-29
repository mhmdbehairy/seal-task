import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'authentication',
  initialState: {
    user: localStorage.getItem('userData') || null,
    loginStatus:
      localStorage.getItem('token') && localStorage.getItem('token') !== null
        ? true
        : false,
    loading: false,
    error: false
  },
  reducers: {
    success: (state, action) => {
      state.user = action.payload;
      state.loginStatus = true;
      state.loading = false;
    },
    loggingIn: state => {
      state.loading = true;
    },
    error: state => {
      state.loading = false;
      state.error = true;
    }
  }
});

export const { success, loggingIn, error } = slice.actions;

export const selectUser = state => state.authentication.user;
export const selectLoading = state => state.authentication.loading;
export const selectLoginStatus = state => state.authentication.loginStatus;
export const selectError = state => state.authentication.error;

export default slice.reducer;
