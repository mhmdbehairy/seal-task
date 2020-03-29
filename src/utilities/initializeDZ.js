export const initDZ = () => {
  const { DZ } = window;

  DZ.init({
    appId: '392944',
    secret: 'bdf0147e1fbda79d41721573c8d352c4',
    channelUrl: process.env.REACT_APP_CHANNEL_URL
  });
};
