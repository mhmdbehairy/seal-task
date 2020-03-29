import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from 'components/auth/authSlice';
import GenreReducer from 'components/genre/genreSlice';
import ArtistReducer from 'components/artist/artistSlice';

export default configureStore({
  reducer: {
    authentication: AuthReducer,
    genre: GenreReducer,
    artist: ArtistReducer
  }
});
