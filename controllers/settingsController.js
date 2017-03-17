'use strict'
var path = require("path");

exports.get_nav_theme = function (req, next) {
  if (req.cookies.nav_theme) { return req.cookies.nav_theme }
  return "monokai";
};

exports.update_nav = function (req, res, next) {
  // coooOOOkie
  if (!req.cookies.settings) { res.cookie("nav_theme", "monokai") }
  // update cookie
  res.cookie("nav_theme", req.body.new_nav);
  var style_file = "";
  switch(req.body.new_nav) {
    case "dark":
      style_file = "/../views/navbar_styles/navbar_dark.html";
      break;
    case "light":
      style_file = "/../views/navbar_styles/navbar_light.html";
      break;
    default:
      style_file = "/../views/navbar_styles/navbar_monokai.html";
  }
  res.sendFile(path.join(__dirname+style_file))
  console.log(path.join(__dirname+style_file));
};

exports.get_page_data = function (pageName, next) { return page_defs.info(pageName); }

var page_defs = (function () {
  var page_info = {
    index: {
      title: "Home",
      page_name: "home",
      active_nav: "Home",
      url: "/",
      css: [ "//fonts.googleapis.com/css?family=Life Savers",
             "//fonts.googleapis.com/css?family=Cinzel Decorative",
             "/css/index.css"],
      js: [ "/js/interactive.js",
            "/js/nav_control.js" ],
    },
    blog: {
      title: "Blog",
      page_name: "blog",
      active_nav: "Blog",
      url: "/blog",
      css: [ "//fonts.googleapis.com/css?family=Life Savers",
             "//fonts.googleapis.com/css?family=Cinzel Decorative",
             "https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css",
             "/css/blog_index.css",
             "/css/blog_right_panel.css" ],
      js: [ "/js/interactive.js",
            "/js/helper.js",
            "/js/nav_control.js",
            "/js/blog_right_panel.js" ],
    },
    blog_article: {
      title: "Blog: ",
      page_name: "blog_article",
      active_nav: "Blog",
      url: "/blog/article/:id",
      css: [ "//fonts.googleapis.com/css?family=Cinzel Decorative",
             "https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css",
             "/css/blog_article.css",
             "/css/blog_right_panel.css"  ],
      js: [ "/js/interactive.js",
            "/js/helper.js",
            "/js/nav_control.js",
            "/js/blog_right_panel.js" ],
    },
    contact: {
      title: "Contact",
      page_name: "contact",
      active_nav: "Contact",
      url: "/contact",
      css: [ "/css/contact.css" ],
      js: [ "/js/interactive.js",
            "/js/helper.js",
            "/js/nav_control.js" ],
    },
    about: {
      title: "About",
      page_name: "about",
      active_nav: "About",
      url: "/about",
      css: [ "/css/about.css" ],
      js: [ "/js/helper.js",
            "/js/nav_control.js" ],
    },
    projects: {
      title: "Projects",
      page_name: "projects",
      active_nav: "Projects",
      url: "/projects",
      css: [ "/css/under_construction.css" ],
      js: [ "/js/interactive.js",
            "/js/helper.js",
            "/js/nav_control.js" ],
    },
    projects_learning_main: {
      title: "Learning App",
      page_name: "learning_main",
      active_nav: "Projects",
      url: "/projects/learning-app",
      css: [ "/css/projects_learning_main.css" ],
      js: [ "/js/interactive.js",
            "/js/nav_control.js" ],
    },
    projects_learning_spelling: {
      title: "Spelling Game",
      page_name: "spelling",
      active_nav: "Projects",
      url: "/projects/learning-app/spelling",
      css: [ "/css/layout_learning_game.css",
             "/css/projects_learning_spelling.css" ],
      js: [ "/js/lockbar.js",
            "/js/spelling_game.js",
            "/js/helper.js" ],
    },
    projects_learning_memory: {
      title: "Projects",
      page_name: "memory",
      active_nav: "Projects",
      url: "/projects/learning-app/memory",
      css: [ "/css/under_construction.css" ],
      js: [ "/js/interactive.js",
            "/js/helper.js",
            "/js/nav_control.js" ],
    },
    projects_story_app: {
      title: "Story App",
      page_name: "story_app",
      active_nav: "Projects",
      url: "/projects/story-app/",
      css: [ "/css/under_construction.css" ],
      js: [ "/js/interactive.js",
            "/js/helper.js",
            "/js/nav_control.js" ],
    },
  };
  return {
    info: function (pageName) {
      return page_info[pageName];
    }
  }
})();