var settings = require('../controllers/settingsController.js');
var model = require('../models/blog_data.js');
var article = require('../models/article.js');
var async = require('async');

exports.get_blog = function(req, res, next) {
  /*
  async.parallel({
    page_data: function(callback) {
      settings.get_page_data('blog')(callback);
    },
    nav_theme: function(callback) {
      settings.get_nav_theme(req)(callback);
    },
    feature_article: function(callback) {
      return article.getFeatureArticle;
    },
    sub_feature_articles: function(callback) {
      return article.getSubFeatureArticles;
    },
    articles_for_right_panel: function(callback) {
      return article.getArticlesByDateTitle;
    },
  }, function(err, results) {
        if (err) { return next(err); }
        res.render('blog_index', {
          header: settings.get_page_data('blog'),
          nav_theme: settings.get_nav_theme(req),
          feature: results.feature_article,
          sub_features: results.sub_feature_articles,
          for_right_panel: results.articles_for_right_panel
     });
  });
  */
  var sortedArticles = article.getArticlesByDateTitle();
  var articleYearMonthObj = article.getArticleMonthYears(sortedArticles);
  res.render('blog_index', {
    header: settings.get_page_data('blog'),
    nav_theme: settings.get_nav_theme(req),
    feature: article.getFeatureArticle(),
    sub_features: article.getSubFeatureArticles(),
    date_sorted_articles: sortedArticles,
    right_panel_mo_yr: articleYearMonthObj
  });
};

exports.get_full_article = function(req, res, next) {
  var sortedArticles = article.getArticlesByDateTitle();
  var articleYearMonthObj = article.getArticleMonthYears(sortedArticles);
  res.render('blog_article', {
    header: settings.get_page_data('blog_article'),
    nav_theme: settings.get_nav_theme(req),
    article: article.getFullArticle(req.params.id),
    pieces: article.getArticlePieces(req.params.id),
    date_sorted_articles: sortedArticles,
    right_panel_mo_yr: articleYearMonthObj
  });
};