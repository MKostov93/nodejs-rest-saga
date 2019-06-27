/**
 * EXTERNAL DEPENDENCIES.
 */
const mongoose = require('mongoose');

/**
 * INTERNAL DEPENDENCIES.
 */
const exampleUserSchema = require('../../schemas/user');

module.exports = mongoose.model('ExampleUser', exampleUserSchema);
