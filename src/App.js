import React from 'react';

import { Route, Switch } from 'react-router-dom';

import { Layout } from 'components';
import { LoginPage } from 'pages';
import { GenresContainer } from 'pages';
import { initDZ } from 'utilities';

import 'antd/dist/antd.css';

initDZ();

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route exact path="/genre">
          <GenresContainer />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
