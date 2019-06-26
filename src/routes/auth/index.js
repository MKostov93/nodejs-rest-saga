/**
 * EXTERNAL DEPENDENCIES.
 */
const express = require('express');
const { body } = require('express-validator/check');

/**
 * CONTROLLERS.
 */
const authController = require('../../controllers/auth');

/**
 * INITIALIZE.
 */
const router = express.Router();

/**
 * Example routes.
 */
router.get('/example-route', authController.exampleMethod);

module.exports = router;
