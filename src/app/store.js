import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from 'components/auth/authSlice';
import GenreReducer from 'components/genre/genreSlice';
import ArtistReducer from 'components/artists-list/artistsSlice';

export default configureStore({
  reducer: {
    authentication: AuthReducer,
    genre: GenreReducer,
    artists: ArtistReducer
  }
});
