import React, { useEffect } from 'react';

import { Spin } from 'antd';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled/macro';

import { success, selectGenres } from 'components/genres-grid/genreSlice';
import GenreCard from './genreCard';

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
  const history = useHistory();

  const viewArtists = id => {
    history.push({
      pathname: `/genre/${id}`,
      state: { modal: true }
    });
  };

  useEffect(() => {
    DZ.api('/genre', response => {
      dispatch(success(response.data));
    });
  }, []);

  return (
    <Spin spinning={genresList && genresList.length === 0}>
      <GenreContainer>
        {genresList &&
          genresList.map(genre => {
            return (
              <GenreCard
                key={genre.id}
                name={genre.name}
                image={genre.picture_medium}
                id={genre.id}
                onClick={() => {
                  viewArtists(genre.id);
                }}
              ></GenreCard>
            );
          })}
      </GenreContainer>
    </Spin>
  );
};

export default GenreGrid;
