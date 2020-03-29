import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from 'components/auth/authSlice';
import GenreReducer from 'components/genres-grid/genreSlice';
import ArtistReducer from 'components/artists-list/artistsSlice';

export default configureStore({
  reducer: {
    authentication: AuthReducer,
    genres: GenreReducer,
    artists: ArtistReducer
  }
});
