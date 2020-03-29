import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { Modal, Button } from 'antd';
import styled from '@emotion/styled/macro';

import { success, selectArtists } from './artistsSlice';

const { DZ } = window;

const ArtistsContainer = styled.div`
  .ant-modal .ant-modal-content {
    background-color: red;
    height: 500px;
  }
`;

const ArtistList = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const artistsList = useSelector(selectArtists);

  useEffect(() => {
    DZ.api(`/genre/${id}/artists`, response => {
      dispatch(success(response.data));
    });
  }, []);

  const handleHide = () => {
    history.goBack();
  };

  return (
    <ArtistsContainer>
      <Modal
        visible={true}
        title="Artists"
        bodyStyle={{ height: '500px', overflowY: 'scroll' }}
        onCancel={handleHide}
        footer={[
          <Button primary="true" key="back" onClick={handleHide}>
            Return
          </Button>
        ]}
      >
        <ul>
          {artistsList &&
            artistsList.map(artist => {
              return <li key={artist.id}>{artist.name}</li>;
            })}
        </ul>
      </Modal>
    </ArtistsContainer>
  );
};

export default ArtistList;
