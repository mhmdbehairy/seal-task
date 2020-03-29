import React, { useEffect } from 'react';

import Header from 'components/header';
import { GenreGrid } from 'components';
import {
  success,
  error,
  selectGenres
} from 'components/genres-grid/genreSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ArtistList } from 'components';

const Artists = () => {
  return (
    <>
      <ArtistList></ArtistList>
    </>
  );
};

export default Artists;
