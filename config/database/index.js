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
const connectToDB = () => {
  mongoose.connect(config.dbURI, { useNewUrlParser: true })
    .then(result => console.log('MongoDB connection successful.'))
    .catch(error => {
      console.error(error);
      console.log('MongoDB connection error. Please make sure MongoDB is running.');
      process.exit();
    });
}

module.exports = connectToDB;
