import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectLoginStatus } from 'components/auth/authSlice';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const loginStatus = useSelector(selectLoginStatus);

  return (
    <Route
      {...rest}
      render={props =>
        loginStatus ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/'
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
