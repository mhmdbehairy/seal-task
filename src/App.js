import React, { useState, useEffect } from 'react';

import { Route, Redirect, Switch, useHistory } from 'react-router-dom';

import { Layout } from 'components';
import { LoginPage } from 'pages';
import { GenresContainer, Artists } from 'pages';
import { ArtistList } from 'components';
import { initDZ } from 'utilities';

import 'antd/dist/antd.css';

initDZ();

const App = () => {
  const history = useHistory();
  const location = history.location;

  const [prevLocation, setPrevLocation] = useState(location);

  useEffect(() => {
    if (!(location.state && location.state.modal)) {
      setPrevLocation(location);
    }
  }, [location]);

  const isModal =
    location.state && location.state.modal && prevLocation !== location;

  return (
    <Layout>
      <Switch location={isModal ? prevLocation : location}>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route exact path="/genre">
          <GenresContainer />
        </Route>
        <Redirect from="/genre/:id" to="/genre" />
      </Switch>
      {isModal && (
        <Route exact path="/genre/:id">
          <Artists></Artists>
        </Route>
      )}
    </Layout>
  );
};

export default App;
