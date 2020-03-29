import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'genres',
  initialState: {
    genresList: []
  },
  reducers: {
    success: (state, action) => {
      state.genresList = action.payload;
    }
  }
});

export const { success } = slice.actions;

export const selectGenres = state => state.genres.genresList;

export default slice.reducer;
