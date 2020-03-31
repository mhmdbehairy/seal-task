import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { Modal, Button, List, Avatar, Spin } from 'antd';
import styled from '@emotion/styled/macro';

import { success, clear, selectArtists } from './artistsSlice';

const { DZ } = window;

const ArtistName = styled.p`
  margin-bottom: 0px;
  line-height: 100px;
  font-size: 20px;
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
    history.push({
      pathname: `/genre`,
      state: { modal: false }
    });
    dispatch(clear());
  };

  return (
    <Modal
      visible={true}
      title={(() => {
        return <h1 style={{ marginBottom: '0' }}>Artists</h1>;
      })()}
      bodyStyle={{
        height: '400px',
        overflowY: artistsList && artistsList.length === 0 ? 'none' : 'scroll'
      }}
      onCancel={handleHide}
      footer={[
        <Button
          type="primary"
          style={{
            backgroundColor: '#3c3c3c',
            border: '0',
            width: '150px',
            height: '50px'
          }}
          size="large"
          key="back"
          onClick={handleHide}
        >
          Return
        </Button>
      ]}
    >
      <Spin spinning={artistsList && artistsList.length === 0}>
        <List
          itemLayout="horizontal"
          dataSource={artistsList}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar
                    size="large"
                    style={{ width: '100px', height: '100px' }}
                    src={item.picture}
                  />
                }
                title={<ArtistName>{item.name}</ArtistName>}
              />
            </List.Item>
          )}
        />
      </Spin>
    </Modal>
  );
};

export default ArtistList;
