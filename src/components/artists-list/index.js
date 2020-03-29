import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled/macro';

import { success, error, selectArtists } from './artistSlice';

import { useParams, Route } from 'react-router-dom';

const { DZ } = window;

const GenreContainer = styled.div``;

const ArtistList = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const artistList = useSelector(selectArtists);

  useEffect(() => {
    window.DZ.api(`/genre/${id}/artists`, response => {
      dispatch(success(response.data));
    });
  }, []);

  console.log(artistList);

  return (
    <GenreContainer>
      <ul>
        {artistList &&
          artistList.map(artist => {
            return <li key={artist.id}>{artist.name}</li>;
          })}
      </ul>
    </GenreContainer>
  );
};

export default ArtistList;
