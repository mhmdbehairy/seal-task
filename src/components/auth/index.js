import React from 'react';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled/macro';
import { Button, Card } from 'antd';

import { success, error } from 'components/auth/authSlice';

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

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const login = () => {
    DZ.login(
      response => {
        if (response.authResponse) {
          DZ.api('/user/me', user => {
            dispatch(success(user));
            history.push('/genre');
          });
        } else {
          dispatch(error());
        }
      },
      { perms: 'basic_access, offline_access' }
    );
  };

  return (
    <LoginContainer>
      <Card title="Welcome to Deezer">
        <p>Login to Proceed</p>
        <Button
          primary="true"
          size="large"
          style={{ width: 300 }}
          onClick={login}
        >
          Log in
        </Button>
      </Card>
    </LoginContainer>
  );
};

export default Login;
