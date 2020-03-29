import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'authentication',
  initialState: {
    user: null,
    loginStatus: false,
    loading: false
  },
  reducers: {
    success: (state, action) => {
      state.user = action.payload;
      state.loginStatus = true;
      state.loading = false;
    },
    loggingIn: state => {
      state.loading = true;
    }
  }
});

export const { success, loggingIn } = slice.actions;

export const selectUser = state => state.authentication.user;
export const selectLoading = state => state.authentication.loading;
export const selectLoginStatus = state => state.authentication.loginStatus;

export default slice.reducer;
