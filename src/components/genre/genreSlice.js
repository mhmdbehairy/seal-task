import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'genre',
  initialState: {
    genreList: []
  },
  reducers: {
    success: (state, action) => {
      state.genreList = action.payload;
    },
    error: state => {
      state.genreList = [];
    }
  }
});

export const { success, error } = slice.actions;

export const selectGenres = state => state.genre.genreList;

export default slice.reducer;
