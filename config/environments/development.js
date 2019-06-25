const port = process.env.PORT || 8080;
const dbURI = 'Place MongoDB URI here';
const host = 'http://localhost';

module.exports = {
	port,
	dbURI,
	env: 'development',
	host: `${host}:${port}`
};
