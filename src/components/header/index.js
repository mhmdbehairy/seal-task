import React from 'react';

import { Button, Avatar } from 'antd';
import { useSelector } from 'react-redux';
import styled from '@emotion/styled/macro';

import { selectUser } from 'components/auth/authSlice';
import { DeezerLogo } from 'components/svgs';

const HeaderContainer = styled.header`
  background-color: #3c3c3c;
  padding: 15px 48px;
  z-index: 10;
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;

  svg {
    max-width: 100%;
    height: auto;
  }

  button {
    color: #fff;
    background-color: transparent;
    font-size: 20px;
    border: 0;
    height: 50px;
    padding: 0;

    :focus {
      background-color: transparent;
      border: 0;
    }

    :hover {
      background-color: transparent;
    }
  }
`;

const LogoWrapper = styled.div`
  flex: 1 1 0;
`;

const SubHeader = styled.div`
  display: flex;
  line-height: 55px;
  align-items: center;

  p {
    margin: 0 150px 0 0;
    font-size: 20px;
    color: #fff;
  }
`;

const AvatarWrapper = styled.div``;

const Header = ({ onClick }) => {
  const user = useSelector(selectUser);

  return (
    <HeaderContainer>
      <LogoWrapper>
        <DeezerLogo color={'#fff'} />
      </LogoWrapper>
      <SubHeader>
        <AvatarWrapper>
          <Avatar
            size="small"
            style={{
              backgroundColor: 'green',
              width: '10px',
              height: '10px',
              marginRight: '7px'
            }}
          />
        </AvatarWrapper>
        <p>{user}</p>
        <Button onClick={onClick}>Log Out</Button>
      </SubHeader>
    </HeaderContainer>
  );
};

export default Header;
