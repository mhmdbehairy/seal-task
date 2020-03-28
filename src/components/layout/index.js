import React from 'react';

import styled from '@emotion/styled/macro';

import Header from 'components/header';

const Content = styled.div``;

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  );
};

export default Layout;
