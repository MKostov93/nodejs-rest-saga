/**
 * EXTERNAL DEPENDENCIES.
 */
const mongoose = require('mongoose');

/**
 * INITIALIZE.
 */
const Schema = mongoose.Schema;

const exampleUserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

module.exports = exampleUserSchema;
