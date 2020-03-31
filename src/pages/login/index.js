import React from 'react';

import styled from '@emotion/styled/macro';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';
import { Login } from 'components';
import {
  success,
  loggingIn,
  error,
  selectLoading,
  selectLoginStatus
} from 'components/auth/authSlice';
import { notify } from 'utilities';

const { DZ } = window;

const Container = styled.section`
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${require('components/images/club.jpg')});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 15% 0;
`;

const LoginPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const loginStatus = useSelector(selectLoginStatus);

  if (loginStatus) {
    return <Redirect from="/" to="/genre" />;
  }

  const login = () => {
    dispatch(loggingIn());
    DZ.login(
      response => {
        if (response.authResponse.accessToken) {
          DZ.api('/user/me', user => {
            dispatch(success(user.name));
            localStorage.setItem('token', response.authResponse.accessToken);
            localStorage.setItem('username', user.name);
            history.push('/genre');
            notify('success', 'Logged in Successfully!');
          });
        } else {
          dispatch(error());
          notify('error', 'Login Unsuccessful. Please, Try Again!');
        }
      },
      { perms: 'basic_access' }
    );
  };

  return (
    <Container>
      <Login loading={loading} onClick={login} />
    </Container>
  );
};

export default LoginPage;
