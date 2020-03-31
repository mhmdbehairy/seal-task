import React from 'react';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { logout } from 'components/auth/authSlice';
import { notify } from 'utilities';
import { GenreGrid, Header } from 'components';

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
