'use strict'
var settings = require('../controllers/settingsController.js');
var word = require('../models/word.js');
var celebration = require('../models/celebration.js');
var async = require('async');

exports.get_main = function (req, res) {
  res.render('projects_learning_main', {
    header: settings.get_page_data('projects_learning_main'),
    nav_theme: settings.get_nav_theme(req)
  });
};

exports.get_spelling_game = function (req, res) {
  // If used_words cookie is present, retrieve used words header obj
  var usedWordsBuff;
  if (req.cookies.used_words) { usedWordsBuff = req.cookies.used_words; }
  else { usedWordsBuff = { index_array: [] }; }
  var Word = word.createWord(-1, usedWordsBuff.index_array);
  res.cookie('used_words', Word.usedWords);
  console.log(celebration.getRandomCenterCelebration());
  res.render('projects_learning_spelling', {
    header: settings.get_page_data('projects_learning_spelling'),
    user_settings: settings.get_user_settings,
    Word: Word,
    centerCelebration: celebration.getRandomCenterCelebration(),
    cornerCelebrations: celebration.getAllCornerCelebrations(),
    wrongResponses: celebration.getAllWrongResponses()
  });
};

exports.get_new_spelling_word = function (req, res) {
  // destringify posted data
  var wordIndex = parseInt(req.body.wordId);
  var wordsUsedBuff = req.body.wordsUsed.split(",");
  for (var i = 0; i < wordsUsedBuff.length; i++) { wordsUsedBuff[i] = parseInt(wordsUsedBuff[i]) }
  // used posted data to create Word obj, then get next word
  var Word = word.createWord(wordIndex, wordsUsedBuff);
  Word.updateWord();
  // update used_words on the cookie
  res.cookie('used_words', Word.usedWords);
  res.render('projects_learning_spelling_partial', {
    layout: false,
    Word: Word,
    centerCelebration: celebration.getRandomCenterCelebration()
  });
};

exports.get_memory_game = function(req, res) {
  res.render('under_construction', {
    header: settings.get_page_data('projects_learning_memory'),
    nav_theme: settings.get_nav_theme(req)
  });
};

exports.story_app = function(req, res) {
  res.render('under_construction', {
    header: settings.get_page_data('projects_story_app'),
    nav_theme: settings.get_nav_theme(req)
  });
};

