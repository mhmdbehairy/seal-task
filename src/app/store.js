import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from 'components/auth/authSlice';
import GenreReducer from 'components/genre/genreSlice';

export default configureStore({
  reducer: {
    authentication: AuthReducer,
    genre: GenreReducer
  }
});
