/**
 * EXTERNAL DEPENDENCIES.
 */
const path = require('path');

/**
 * INTERNAL DEPENDENCIES.
 */
const getRootDir = require('./getRootDir');

/**
 * Construct path.
 *
 * @param  {Array}  pathSegments
 * @return {String}
 */
const constructPath = pathSegments => path.join(getRootDir, ...pathSegments);

module.exports = constructPath;
