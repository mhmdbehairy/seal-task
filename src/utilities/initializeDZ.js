export const initDZ = () => {
  const { DZ } = window;

  DZ.init({
    appId: '392944',
    secret: 'bdf0147e1fbda79d41721573c8d352c4',
    channelUrl:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000/'
        : 'https://5e833d7600cc04017644c1f1--inspiring-montalcini-0a8d4c.netlify.com/'
  });
};
