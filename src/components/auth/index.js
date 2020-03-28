import { success, error } from 'components/auth/authSlice';

const { DZ } = window;

DZ.init({
  appId: '392944',
  secret: 'bdf0147e1fbda79d41721573c8d352c4',
  channelUrl: process.env.REACT_APP_CHANNEL_URL
});

export const logIn = dispatch => {
  DZ.login(
    response => {
      if (response.authResponse.accessToken) {
        DZ.api('/user/me', user => {
          dispatch(success(user));
        });
      } else {
        dispatch(error());
      }
    },
    { perms: 'basic_access' }
  );
};
