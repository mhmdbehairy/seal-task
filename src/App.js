import React from 'react';

import { Route, Switch } from 'react-router-dom';

import { Layout } from 'components';
import { LoginContainer } from 'pages';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <LoginContainer />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
