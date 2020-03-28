import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'authentication',
  initialState: {
    data: null,
    status: false,
    loading: false
  },
  reducers: {
    logIn: state => {
      state.loading = true;
    },
    success: (state, action) => {
      state.data = action;
      state.status = true;
      state.loading = false;
    },
    error: state => {
      state.data = null;
      state.status = false;
      state.loading = false;
    }
  }
});

export const { logIn, success, error } = slice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectData = state => state.authentication.data;
export const selectStatus = state => state.authentication.status;
export const selectLoading = state => state.authentication.loading;

export default slice.reducer;
