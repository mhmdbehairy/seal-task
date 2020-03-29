import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled/macro';
import { Spin } from 'antd';

import GenreCard from './genreCard';

import { success, selectGenres } from 'components/genres-grid/genreSlice';

const { DZ } = window;

const GenreContainer = styled.div`
  max-width: 1040px;
  margin: 0 auto;
  padding: 5% 0;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-gap: 25px;
  grid-auto-flow: row;
`;

const GenreGrid = () => {
  const dispatch = useDispatch();
  const genresList = useSelector(selectGenres);

  useEffect(() => {
    DZ.api('/genre', response => {
      dispatch(success(response.data));
    });
  }, []);

  return (
    <Spin spinning={genresList.length === 0}>
      <GenreContainer>
        {genresList &&
          genresList.map(genre => {
            return (
              <GenreCard
                key={genre.id}
                name={genre.name}
                image={genre.picture_medium}
                id={genre.id}
              ></GenreCard>
            );
          })}
      </GenreContainer>
    </Spin>
  );
};

export default GenreGrid;
