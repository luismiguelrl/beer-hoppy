export default {
  port: parseInt(process.env.PORT) || 3000,
  punkApiUri: process.env.PUNKAPI_URI || 'https://api.punkapi.com/v2/',
};
