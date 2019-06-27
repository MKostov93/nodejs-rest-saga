/**
 * EXTERNAL DEPENDENCIES.
 */
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const dotenv = require('dotenv').config();

/**
 * INTERNAL DEPENDENCIES.
 */
const config = require('./config/environments');
const connectToDB = require('./config/database');

/**
 * UTILS.
 */
const constructPath = require('./src/utils/constructPath');

/**
 * ROUTES.
 */
const routes = require('./src/routes');

/**
 * MIDDLEWARE.
 */
const setResponseAccessHeaders = require('./src/middleware/setResponseAccessHeaders');
const errorHandler = require('./src/middleware/errorHandler');

/**
 * Create Express server.
 */
const app = express();

/**
 * Connect to MongoDB.
 */
connectToDB();

/**
 * Express configuration.
 */
app.use(helmet());
app.use(bodyParser.json());
app.use(express.static(constructPath(['src', 'public'])));
app.use(setResponseAccessHeaders(config.host));

/**
 * API routes.
 */
app.use('/api', routes);

/**
 * Error Handler.
 */
app.use(errorHandler);

/**
 * Start Express server.
 */
app.listen(config.port, () => console.log(`Listening on port ${config.port}!`));