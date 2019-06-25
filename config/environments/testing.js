const port = process.env.PORT || 8080;
const host = 'http://localhost';
const dbURI = 'Place MongoDB URI here';

module.exports = {
  port,
  dbURI,
  env: 'testing',
  host: `${host}:${port}`
};
