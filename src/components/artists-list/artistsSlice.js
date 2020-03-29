import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'artists',
  initialState: {
    artistsList: []
  },
  reducers: {
    success: (state, action) => {
      state.artistsList = action.payload;
    }
  }
});

export const { success, error } = slice.actions;

export const selectArtists = state => state.artists.artistsList;

export default slice.reducer;
