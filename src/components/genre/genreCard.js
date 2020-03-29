import React, { useEffect } from 'react';

import styled from '@emotion/styled/macro';

import { Card } from 'antd';
import { Link } from 'react-router-dom';

const GenreCard = ({ name, image, id }) => {
  const viewArtists = () => {};

  return (
    <Card>
      <img src={image}></img>
      <p>{name}</p>
      <Link
        to={{
          pathname: `/genre/${id}`,
          state: { modal: true }
        }}
      >
        Show Artists
      </Link>
    </Card>
  );
};

export default GenreCard;
