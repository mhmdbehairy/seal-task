import React from 'react';

import styled from '@emotion/styled/macro';
import { Button, Card } from 'antd';

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

const Login = ({ loading, onClick }) => {
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
          onClick={onClick}
          loading={loading}
        >
          Login
        </Button>
      </Card>
    </LoginContainer>
  );
};

export default Login;
