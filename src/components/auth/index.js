import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';
import styled from '@emotion/styled/macro';
import { Button, Card } from 'antd';

import {
  success,
  loggingIn,
  error,
  selectLoading,
  selectLoginStatus
} from 'components/auth/authSlice';
import { notify } from 'utilities';

const { DZ } = window;

const LoginContainer = styled.section`
  .ant-card-bordered {
    width: 400px;
    margin: 0 auto;
    text-align: center;
    border-radius: 20px;
  }

  .ant-card-body {
    line-height: 60px;
  }
`;

const Title = styled.h1`
  color: #3c3c3c;
  font-size: 24px;
  margin-bottom: 0;
`;

const Info = styled.p`
  color: #3c3c3c;
  font-size: 18px;
`;

const Login = () => {
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
    <LoginContainer>
      <Card
        title={(() => {
          return <Title>Welcome to My Application</Title>;
        })()}
      >
        <Info>Login to Proceed</Info>
        <Button
          type="primary"
          style={{
            backgroundColor: '#3c3c3c',
            border: '0',
            width: '300px',
            height: '50px'
          }}
          size="large"
          key="back"
          onClick={login}
          loading={loading}
        >
          Login
        </Button>
      </Card>
    </LoginContainer>
  );
};

export default Login;
