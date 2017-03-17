var express = require('express');
var router = express.Router();

var blog_controller = require('../controllers/blogController.js');

/* GET request for Blog index. */
router.get('/', blog_controller.get_blog);

/* GET request for full Article. */
router.get('/article/:id', blog_controller.get_full_article);

module.exports = router;