/**
 * Throws an error.
 *
 * @param {string}  message
 * @param {number}  statusCode
 */
module.exports = (message = 'Error occurred!', statusCode = 500) => {
  const error = new Error(message);
  error.statusCode = statusCode;
  throw error;
}
