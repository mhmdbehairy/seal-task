import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import styled from '@emotion/styled/macro';
import GenreCard from './genreCard';

import { success, error, selectGenres } from 'components/genre/genreSlice';

const { DZ } = window;

const GenreContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
  grid-auto-flow: row;
`;

const GenreGrid = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const genreList = useSelector(selectGenres);

  useEffect(() => {
    DZ.api('/genre', response => {
      dispatch(success(response.data));
    });
  }, []);

  return (
    <GenreContainer>
      {genreList &&
        genreList.map(genre => {
          return (
            <GenreCard
              key={genre.id}
              name={genre.name}
              image={genre.picture}
              id={genre.id}
            ></GenreCard>
          );
        })}
    </GenreContainer>
  );
};

export default GenreGrid;
