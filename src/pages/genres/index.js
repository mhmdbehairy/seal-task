import React from 'react';

import Header from 'components/header';
import { GenreGrid } from 'components';

import { useDispatch, useSelector } from 'react-redux';
import { notify } from 'utilities';
import { useHistory } from 'react-router-dom';

import { logout, selectUser } from 'components/auth/authSlice';

const GenresContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const logOut = () => {
    window.DZ.logout();
    dispatch(logout());
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    history.push('/');
    notify('success', 'Logged out Successfully!');
  };

  return (
    <>
      <Header onClick={logOut}></Header>
      <GenreGrid></GenreGrid>
    </>
  );
};

export default GenresContainer;
