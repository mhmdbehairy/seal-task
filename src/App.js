import React, { useState, useEffect } from 'react';

import { Route, Redirect, Switch, useHistory } from 'react-router-dom';
import 'antd/dist/antd.css';

import { LoginPage, GenresContainer } from 'pages';
import { ArtistList, PrivateRoute } from 'components';
import { initDZ } from 'utilities';

// Inject DZ object in the window object
initDZ();

const App = () => {
  const history = useHistory();
  const location = history.location;
  const [prevLocation, setPrevLocation] = useState(location);
  const isModal =
    location.state && location.state.modal && prevLocation !== location;

  useEffect(() => {
    if (!(location.state && location.state.modal)) {
      setPrevLocation(location);
    }
  }, [location]);

  return (
    <>
      <Switch location={isModal ? prevLocation : location}>
        <Route exact path="/" component={LoginPage} />
        <PrivateRoute exact path="/genre" component={GenresContainer} />
        <Redirect from="/genre/:id" to="/genre" />
      </Switch>
      {isModal && (
        <PrivateRoute exact path="/genre/:id" component={ArtistList} />
      )}
    </>
  );
};

export default App;
