var express = require('express');
var router = express.Router();

var main_controller = require('../controllers/mainController');
var learning_controller = require('../controllers/learningController');
var settings_controller = require('../controllers/settingsController');

/* GET home page. */
router.get('/', main_controller.get_home);
/* GET about page. */
router.get('/about', main_controller.get_about);
/* GET contact page. */
router.get('/contact', main_controller.get_contact);
/* GET projects page. */
router.get('/projects', main_controller.get_projects);

/* GET learning-app page. */
router.get('/projects/learning-app', learning_controller.get_main);

/* GET spelling-game page. */
router.get('/projects/learning-app/spelling', learning_controller.get_spelling_game);

/* POST spelling-game new word. */
router.post('/projects/learning-app/spelling/new', learning_controller.get_new_spelling_word);

/* GET spelling-game page. */
router.get('/projects/learning-app/memory', learning_controller.get_memory_game);

/* GET under construction page for now */
router.get('/projects/story-app', learning_controller.story_app);

// post to change user configuration
router.post('/settings-nav', settings_controller.update_nav);

module.exports = router;
