import React from 'react';
import { useDispatch } from 'react-redux';

import styled from '@emotion/styled/macro';
import { Button, Card } from 'antd';

import { logIn } from 'components';

const HeaderContainer = styled.header`
  background-color: #3c3c3c;
  padding: 15px 48px;

  svg {
    max-width: 100%;
    height: auto;
  }
`;

const LoginContainer = () => {
  const dispatch = useDispatch();

  return (
    <Card title="Welcome to My Application" bordered="true">
      <Button onClick={e => logIn(dispatch)}>Log In</Button>
    </Card>
  );
};

export default LoginContainer;
