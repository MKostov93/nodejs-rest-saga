/**
 * EXTERNAL DEPENDENCIES.
 */
const mongoose = require('mongoose');

/**
 * INTERNAL DEPENDENCIES.
 */
const exampleUserSchema = require('../../schemas/score');

module.exports = mongoose.model('ExampleUser', exampleUserSchema);
