import React from 'react';

import styled from '@emotion/styled/macro';

import { Login } from 'components';

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
  return (
    <Container>
      <Login />
    </Container>
  );
};

export default LoginPage;
