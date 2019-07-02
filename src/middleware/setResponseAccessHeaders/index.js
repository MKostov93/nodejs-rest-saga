/**
 * Sets the response access headers.
 *
 * @param  {String}  origin
 */
const setResponseAccessHeaders = (origin = '*') => (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
}

module.exports = setResponseAccessHeaders;
