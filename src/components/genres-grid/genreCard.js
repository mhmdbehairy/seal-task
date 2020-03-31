import React from 'react';

import styled from '@emotion/styled/macro';
import { Card } from 'antd';

const { Meta } = Card;

const MetaWrapper = styled.div`
  text-align: center;
`;

const GenreCard = ({ name, image, id, onClick }) => {
  return (
    <Card
      hoverable
      style={{ width: '240px' }}
      cover={<img alt={name} src={image} />}
      onClick={onClick}
    >
      <MetaWrapper>
        <Meta
          title={(() => {
            return <h2 style={{ fontSize: '20px' }}>{name}</h2>;
          })()}
        />
      </MetaWrapper>
    </Card>
  );
};

export default GenreCard;
