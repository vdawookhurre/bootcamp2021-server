var express = require('express');
var router = express.Router();
var Controllers = require("../controllers");
var authMiddleware = require("../middleware/authMiddleware");
Controllers.timelineController.connect()

router.get('/',authMiddleware.Validate,Controllers.timelineController.getPosts)
router.post('/create',authMiddleware.Validate,Controllers.timelineController.postPost)
module.exports = router;