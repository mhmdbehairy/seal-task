import React, { useEffect } from 'react';

import Header from 'components/header';
import { GenreGrid } from 'components';
import { success, error, selectGenres } from 'components/genre/genreSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ArtistList } from 'components';

const Artists = () => {
  return (
    <>
      <Header></Header>
      <ArtistList></ArtistList>
    </>
  );
};

export default Artists;
