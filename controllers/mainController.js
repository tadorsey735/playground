var settings = require('../controllers/settingsController.js');

exports.get_home = function(req, res) {
  res.render('index', {
    header: settings.get_page_data('index'),
    nav_theme: settings.get_nav_theme(req)
  });
};

exports.get_about = function(req, res) {
  res.render('about', {
    header: settings.get_page_data('about'),
    nav_theme: settings.get_nav_theme(req)
  });
};

exports.get_contact = function(req, res) {
  res.render('contact', {
    header: settings.get_page_data('contact'),
    nav_theme: settings.get_nav_theme(req)
  });
};

exports.get_projects = function(req, res) {
  res.render('under_construction', {
    header: settings.get_page_data('projects'),
    nav_theme: settings.get_nav_theme(req)
  });
};