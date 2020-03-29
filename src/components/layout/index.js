import React from 'react';

import styled from '@emotion/styled/macro';

const Content = styled.div``;

const Layout = ({ children }) => {
  return (
    <>
      <Content>{children}</Content>
    </>
  );
};

export default Layout;
