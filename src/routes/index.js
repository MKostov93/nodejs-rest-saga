/**
 * EXTERNAL DEPENDENCIES.
 */
const express = require('express');

/**
 * Routes.
 */
const AuthRoutes = require('./auth');

/**
 * INITIALIZE.
 */
const router = express.Router();

router.use(AuthRoutes);

module.exports = router;
