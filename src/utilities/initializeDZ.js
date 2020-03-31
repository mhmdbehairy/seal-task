export const initDZ = () => {
  const { DZ } = window;

  DZ.init({
    appId: process.env.REACT_APP_INTEGRATION_ID,
    secret: process.env.REACT_APP_INTEGRATION_SECRET,
    channelUrl: process.env.REACT_APP_CHANNEL_URL
  });
};
