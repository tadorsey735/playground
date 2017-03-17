'use strict'

// Functions accessible externally via import
exports.getFeatureArticle = function () {
  var feature = new Article(getFeatureArticleId());
  feature.setOverviewProperties();
  return feature;
};

exports.getSubFeatureArticles = function () {
  var arr = [];
  var ids = getSubFeatureArticleIds();
  for (var i = 0; i < ids.length; i++) {
    var artBuff = new Article(ids[i]);
    artBuff.setOverviewProperties();
    arr.push(artBuff);
  }
  return arr;
};

exports.getArticleMonthYears = function(sortedArtArr) {
  return getMonthYrObj(sortedArtArr);
}

exports.getArticlesByDateTitle = function () {
  var arr = [];
  for (var i = 0; i < getArticlesCount(); i++) {
    var artBuff = new Article(i);
    artBuff.setDateTitle();
    arr.push(artBuff);
  }
  // sort by date
  arr.sort(function (a,b) {
    return a.date_published.sort_int - b.date_published.sort_int;
  })
  return arr;
};

exports.getFullArticle = function (id) {
  var article = new Article(id);
  article.setFullArticle();
  return article;
};

exports.getArticlePieces = function (id) { return getArticlePieces(id) };

exports.createArticle = function (id) { return new Article(id) };


// Article Object
function Article(id) { this.id = id; }

Article.prototype.setDateTitle = function () {
  var buff = getArticleDateTitle(this.id);
  // add the following properties to object
  this.date_published = buff.date_published;
  this.title =          buff.title;
}

Article.prototype.setOverviewProperties = function () {
  var buff = getArticleOverview(this.id);
  // add the following properties to object
  this.featured       = buff.featured;
  this.date_published = buff.date_published;
  this.category       = buff.category;
  this.title          = buff.title;
  this.blurb          = buff.blurb;
  this.main_img_src   = buff.main_img_src;
}

Article.prototype.setFullArticle = function () {
  var buff = getFullArticle(this.id);
  // add the following properties to object
  this.featured       = buff.featured;
  this.date_published = buff.date_published;
  this.date_edited    = buff.date_edited;
  this.category       = buff.category;
  this.title          = buff.title;
  this.blurb          = buff.blurb;
  this.tldr_points    = buff.tldr_points;
  this.main_img_src   = buff.main_img_src;
  this.head_img_src   = buff.head_img_src;
}


// Articles Header Data and associated functions
var featureArticle = 0;
var subFeatureArticles = [1, 2];

var Articles_Header_Data = {
  "0": {
    id: 0,
    featured: true,
    sub_featured: false,
    date_published: {
      year_int: 2017,
      month_int: 2,
      day_int: 26,
      month_string: "February",
      sort_int: 20170226,
      formatted: "February 26, 2017"
    },
    date_edited: {
      year_int: 2017,
      month_int: 2,
      day_int: 28,
      month_string: "February",
      sort_int: 20170228,
      formatted: "February 28, 2017"
    },
    category: "web_dev",
    main_img_src: "/images/node-tile-min.png",
    head_img_src: "/images/node-tile-header-min.png",
    title: "Why I Took the Node.js Route",
    blurb: "Reasons why I decided on Node.js for this site.",
    tldr_points: {
      point_1: "No context switching, JavaScript across the stack",
      point_2: "Great cross-platform support and tools",
      point_3: "Popularity exponentially growing",
      point_4: "Unopinionated",
      point_5: "Super fast async patterns (doesn't really factor into this app's scale though)",
      point_6: "Choosing MySQLEAN stack over MEAN",
      point_7: "I hate JavaScript. I love JavaScript."
    },
    pieces: {},
  },
  "1": {
    id: 1,
    featured: false,
    sub_featured: true,
    date_published: {
      year_int: 2017,
      month_int: 3,
      day_int: 4,
      month_string: "March",
      sort_int: 20170304,
      formatted: "March 4, 2017"
    },
    date_edited: {
      year_int: 2017,
      month_int: 3,
      day_int: 4,
      month_string: "March",
      sort_int: 20170304,
      formatted: "March 4, 2017"
    },
    category: "Philosophy",
    main_img_src: "/images/marcus_aurelius-min.png",
    head_img_src: "/images/marcus_aurelius_header-min.png",
    title: "Stoicisms of Marcus Aurelius",
    blurb: "'Thou art a little soul bearing about a corpse, as Epictetus used to say.'",
    tldr_points: {
      point_1: "Quotes from the Meditations of Marcus Aurelius",
      point_2: "Best quote: <i>When you wake up in the morning, tell yourself, 'The people I deal with today will be meddling, ungrateful, arrogant, dishonest, jealous, and surly. They are like this because they can't tell good from evil.'</i>",
      point_3: "Scraped from <a href='https://en.wikiquote.org/wiki/Marcus_Aurelius'>Wikiquote</a>",
    },
    pieces: {},
  },
  "2": {
    id: 2,
    featured: false,
    sub_featured: true,
    date_published: {
      year_int: 2017,
      month_int: 3,
      day_int: 1,
      month_string: "March",
      sort_int: 20170301,
      formatted: "March 1, 2017"
    },
    date_edited: {
      year_int: 2017,
      month_int: 3,
      day_int: 1,
      month_string: "March",
      sort_int: 20170301,
      formatted: "March 1, 2017"
    },
    category: "JavaScript, Philosophy",
    main_img_src: "/images/callback-hell-min.png",
    head_img_src: "",
    title: "JavaScript: A Language for Existentialists",
    blurb: "Kierkeggard, Heidegger, Sartre and Camus all code in JS",
    tldr_points: {
      point_1: "No Exit from Callback Hell"
    },
    pieces: {},
  },
  "3": {
    id: 3,
    featured: false,
    sub_featured: false,
    date_published: {
      year_int: 2016,
      month_int: 12,
      day_int: 19,
      month_string: "December",
      sort_int: 20161219,
      formatted: "December 19, 2016"
    },
    date_edited: {
      year_int: 2016,
      month_int: 12,
      day_int: 19,
      month_string: "December",
      sort_int: 20161219,
      formatted: "December 19, 2016"
    },
    category: "Lyrics",
    main_img_src: "/images/kiedis-min.png",
    head_img_src: "/images/kiedis-min.png",
    title: "How To Write Red Hot Chili Peppers Lyrics",
    blurb: "A formula to have you writing sick lyrics just Kiedis. Even gives delivery tips",
    tldr_points: {
      point_1: "A formula for lyrical success."
    },
    pieces: {},
  },
};

function getArticlesCount() {
  // hackety-hack-hack-hack
  var counter = 0;
  for (var key in Articles_Header_Data) {
    if (Articles_Header_Data.hasOwnProperty(key)) { counter++ }
  }
  return counter;
}

function getFeatureArticleId() {
  return featureArticle;
}

function getSubFeatureArticleIds() {
  return subFeatureArticles;
}

function getArticleOverview(id) {
  return (({ featured, date_published, category, title, blurb, main_img_src }) => ({ featured, date_published, category, title, blurb, main_img_src }))(Articles_Header_Data[id.toString()]);
}

function getArticleDateTitle(id) {
  return (({ date_published, title }) => ({ date_published, title }))(Articles_Header_Data[id.toString()]);
}

function getArticlesOverview() {
  var overviewData = {};
  for (var i = 1; i < 4; i++) {
    overviewData[i.toString()] = (({ id, featured, date_published, category, title, blurb, main_img_src }) => ({ id, featured, date_published, category, title, blurb, main_img_src }))(Articles_Header_Data[i.toString()]);
  }
  return overviewData;
}

function getFullArticle(id) {
  return Articles_Header_Data[id.toString()];
}

function getArticlePieces(id) {
  var article_pieces = require('./articles/article_' + id.toString() + '.js');
  return article_pieces.get_pieces();
}

function getMonthYrObj(artArr) {
  var obj = {};
  for (var i = 0; i < artArr.length; i++) {
    var yr = (artArr[i.toString()].date_published.year_int).toString();
    var mo = (artArr[i.toString()].date_published.month_string).toString();
    if (!(yr in obj)) {
      obj[yr] = {};
    }
    if (!(mo in obj[yr])) {
      obj[yr][mo] = [];
    }
    // add the index of the Article in the input sorted array
    obj[yr][mo].push(i);
  }
  return obj;
}
