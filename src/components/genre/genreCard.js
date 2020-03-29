import React, { useEffect } from 'react';

import styled from '@emotion/styled/macro';

import { Card } from 'antd';

const GenreCard = ({ name, image }) => {
  return (
    <Card>
      <img src={image}></img>
      <p>{name}</p>
    </Card>
  );
};

export default GenreCard;
