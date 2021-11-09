var express = require('express');
var router = express.Router();

var Controller = require("../controllers");
var authMiddleware = require("../middleware/authMiddleware");

// router.post('/register', authController.register);
// router.post('/login', authController.login);
router.post('/validate', Controller.authController.validate_token);
router.post('/demo', authMiddleware.Validate, Controller.authController.simple_hello);

module.exports = router;