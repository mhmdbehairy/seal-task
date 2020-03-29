import React from 'react';

import styled from '@emotion/styled/macro';
import { Link } from 'react-router-dom';

import { DeezerLogo } from 'components/svgs';

const HeaderContainer = styled.header`
  background-color: #3c3c3c;
  padding: 15px 48px;
  z-index: 10;
  position: relative;

  svg {
    max-width: 100%;
    height: auto;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <DeezerLogo color={'#fff'} />
      </Link>
    </HeaderContainer>
  );
};

export default Header;
