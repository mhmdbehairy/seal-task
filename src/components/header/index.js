import React from 'react';

import styled from '@emotion/styled/macro';
import { Link } from 'react-router-dom';

import { DeezerLogo } from 'components/svgs';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { notify } from 'utilities';
import { useHistory } from 'react-router-dom';

import { logout } from 'components/auth/authSlice';

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

const ButtonWrapper = styled.div`
  line-height: 55px;
`;

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <HeaderContainer>
      <LogoWrapper>
        <Link to="/">
          <DeezerLogo color={'#fff'} />
        </Link>
      </LogoWrapper>
      <ButtonWrapper>
        <Button
          onClick={() => {
            window.DZ.logout();
            dispatch(logout());
            localStorage.removeItem('token');
            localStorage.removeItem('userData');
            history.push('/');
            notify('success', 'Logged out Successfully!');
          }}
        >
          Log Out
        </Button>
      </ButtonWrapper>
    </HeaderContainer>
  );
};

export default Header;
