/**
 * EXTERNAL DEPENDENCIES.
 */
const mongoose = require('mongoose');

/**
 * EXTERNAL DEPENDENCIES.
 */
const config = require('../../config/environments');

/**
 * INITIALIZE.
 */
const connectToDB = (callbackFn) => {
	mongoose.connect(config.dbURI, { useNewUrlParser: true })
		.then(result => callbackFn())
		.catch(error => {
			throw error;
		});
}

module.exports = connectToDB;
