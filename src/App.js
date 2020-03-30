import React, { useState, useEffect } from 'react';

import { Route, Redirect, Switch, useHistory } from 'react-router-dom';

import { Layout } from 'components';
import { LoginPage } from 'pages';
import { GenresContainer } from 'pages';
import { ArtistList, PrivateRoute } from 'components';
import { initDZ } from 'utilities';

import 'antd/dist/antd.css';

initDZ();

const App = () => {
  const history = useHistory();
  const location = history.location;

  const [prevLocation, setPrevLocation] = useState(location);

  console.log(localStorage.getItem('username'));

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
        <Route exact path="/" component={LoginPage} />
        <PrivateRoute exact path="/genre" component={GenresContainer} />
        <Redirect from="/genre/:id" to="/genre" />
      </Switch>
      {isModal && (
        <PrivateRoute exact path="/genre/:id" component={ArtistList} />
      )}
    </Layout>
  );
};

export default App;
