import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'artist',
  initialState: {
    artistList: []
  },
  reducers: {
    success: (state, action) => {
      state.artistList = action.payload;
    },
    error: state => {
      state.artistList = [];
    }
  }
});

export const { success, error } = slice.actions;

export const selectArtists = state => state.artist.artistList;

export default slice.reducer;
