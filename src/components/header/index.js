import React from 'react';

import styled from '@emotion/styled/macro';

import { DeezerLogo } from 'components/svgs';
import { Button, Avatar } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { notify } from 'utilities';
import { useHistory } from 'react-router-dom';

import { logout, selectUser } from 'components/auth/authSlice';

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

const Header = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  const history = useHistory();

  const logOut = () => {
    window.DZ.logout();
    dispatch(logout());
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    history.push('/');
    notify('success', 'Logged out Successfully!');
  };

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
        <Button onClick={logOut}>Log Out</Button>
      </SubHeader>
    </HeaderContainer>
  );
};

export default Header;
