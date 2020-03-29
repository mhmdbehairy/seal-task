import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { Modal, Button, List, Avatar } from 'antd';
import styled from '@emotion/styled/macro';

import { success, selectArtists } from './artistsSlice';

const { DZ } = window;

const ArtistName = styled.p`
  margin-bottom: 0px;
  line-height: 35px;
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
      <List
        itemLayout="horizontal"
        dataSource={artistsList}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar size="large" src={item.picture} />}
              title={<ArtistName>{item.name}</ArtistName>}
            />
          </List.Item>
        )}
      />
    </Modal>
  );
};

export default ArtistList;

/* <ul>
{artistsList &&
  artistsList.map(artist => {
    return <li key={artist.id}>{artist.name}</li>;
  })}
</ul> */
