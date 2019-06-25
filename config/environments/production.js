const port = process.env.PORT || 8080;
const host = process.env.HOST || 'http://localhost';
const dbURI = 'Place MongoDB URI here';

module.exports = {
	port,
	dbURI,
	env: 'production',
	host: `${host}:${port}`
};
