exports.get_full_article_data = function (id) { return fullArticleData.getFullArticle(id); };

exports.get_featured_article_id = function () { return fullArticleData.getFeaturedArticle(); };

exports.get_articles_overview_data = function () { return fullArticleData.getArticlesOverview(); };

var fullArticleData = (function () {
  var featuredArticle = "1";
  var Articles = {
    "0": {
      date_published: {
        sort_int: 0,
        formatted: "",
      },
      date_editted: {
        sort_int: 0,
        formatted: "",
      },
      main_img_src: "",
      title: "Article Not Found",
      pieces: {
        piece_1: {
          type: "text",
          content: "This article could not be found. Sorry about that.",
          add_styles: "",
        },
      },
    },
    "1": {
      id: 1,
      featured: true,
      date_published: {
        year_int: 2017,
        month_int: 2,
        day_int: 26,
        month_string: "February",
        sort_int: 20170226,
        formatted: "February 26, 2017",
      },
      date_edited: {
        year_int: 2017,
        month_int: 2,
        day_int: 28,
        month_string: "February",
        sort_int: 20170228,
        formatted: "February 28, 2017",
      },
      category: "web_dev",
      main_img_src: "/images/node-tile.png",
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
      pieces: {
        piece_1: {
          type: "section-header",
          content: "Reason 1: Front < - JS - > Back",
          add_styles: "",
        },
        piece_2: {
          type: "text",
          content: "<span>One of the big pitches for Node.js is being able to script both server and client in the same language. This really appealed to me. When working full stack to produce a dynamic website, it's really nice to be able to think in one language and not have to switch context when switching between front and back. Having said that I've developed a rather love-hate relationship with JavaScript.</span>",
          add_styles: ""
        },
        piece_3: {
          type: "section-header",
          content: "Reason 2: Cross-Platform Support & Tooling",
          add_styles: ""
        },
        piece_4: {
          type: "text",
          content: "<span>Another major factor in choosing the framework is the impressive amount of cross-platform support by some big players over the past few years. Because I'm a huge fan of both Linux and Windows, it's also huge that Node.js and the tools I love for development have been well integrated into both operating systems. I've been very impressed and happy with Microsoft's recent push to better integrate with Linux. The introduction of Windows Subsytem Linux (WSL) and being able to launch a terminal in a Windows boot has, frankly, improved my quality of life. It's still somewhat limited in its infancy, but moving through Windows in the Ubuntu terminal and having a good deal of my bash scripts largely functional on Windows is wonderful. Command propmt and powershell can be great tools, and I've written some handy .bat files over the years, but I've never found myself craving them the way I do a Linux terminal.</span>",
          add_styles: ""
        },
        piece_5: {
          type: "text",
          content: "<span>Another boon is Microsoft's Visual Studio (VS) Code. Having used Visual Studio IDE professionally for various projects (we're currently using it for tool development at Digital Flight), Node.js gave me the perfect excuse to try out the open-sourced editor with the same brand. Despite the branding, VS Code is built atop Electron, a great project released by GitHub. Electron is a framework used to make Node.js applications compile for the desktop which means the editor literally has Node.js at its heart and it's pumping JavaScript for blood. The VS Code source is a great example of a well built and sophisticated Node.js application, you can check it out <a id='outsideLink' href='https://github.com/Microsoft/vscode'>here</a>. It stands to reason that VS Code would excel at supporting the framework it was written it and, based on my experience so far, I can very much confirm this. VS Code extends the quality I've come to appreciate from the Visual Studio IDE and really streamlines the development process. It's debugger is first rate (in today's update, they've added the ability to set breakpoints on specific columns, perfect for JavaScript's Russian doll-like style). Add to the mix a vibrant and active open source community and it's gold.</span>",
          add_styles: ""
        },
        piece_6: {
          type: "text",
          content: "<span>And but so then, long story short, when I'm sitting down with this or that to do and have to decide whether or not I'm about to boot to Linux or Windows, having the ability to productively work on this app in either OS is a huge plus, especially because it seems the inverse is almost always the case.</span>",
          add_styles: ""
        },
        piece_7: {
          type: "section-header",
          content: "Reason 3: A Budding Market",
          add_styles: ""
        },
        piece_8: {
          type: "text",
          content: "<span>Although programmers for Node.js are currently in less demand than other popular frameworks such as .NET Core, Laravel, Rails, Spring and Django, use cases are increasing and many companies are coming to see it more as a viable solution (rather than just a novelty). I like the optimistic analysis Alexander Morgaut gives <a id='outsideLink' href='https://www.quora.com/Is-Node-js-declining-already'>here</a> on Quora in response to a user's question about Node.js potentially declining.</span>",
          add_styles: ""
        },
        piece_9: {
          type: "text",
          content: "<span>In short, he points to industry support and Job Trends released by Indeed.com which show Node.js as far and away the fastest <u>growing</u> in demand skillset. One point he doesn't make, but is worth adding is the recent release of Angular 2.0. The release of the front-end framework has largely been entwined with TypeScript and the Node.js ecosystem. Once the framework really takes off, and I believe it is destined to do so, Node.js is going to be central in spinning up and serving client side functionality. If this sort of momentum sustains, Node.js is only going to become more popular.</span>",
          add_styles: "",
        },
        piece_10: {
          type: "section-header",
          content: "Reason 4: Flexibility/Configuration over Convention",
          add_styles: ""
        },
        piece_11: {
          type: "text",
          content: "some other stuff</span>",
          add_styles: ""
        },
      },
    },
    "2": {
      id: 2,
      featured: false,
      date_published: {
        year_int: 2017,
        month_int: 3,
        day_int: 4,
        month_string: "March",
        sort_int: 20170304,
        formatted: "March 4, 2017",
      },
      date_edited: {
        year_int: 2017,
        month_int: 3,
        day_int: 4,
        month_string: "March",
        sort_int: 20170304,
        formatted: "March 4, 2017",
      },
      category: "web_dev",
      main_img_src: "/images/marcus_aurelius-min.png",
      title: "Meditations",
      blurb: "The universe is change; our life is what our thoughts make it.",
      tldr_points: {
        point_1: "No context switching, JavaScript across the stack",
        point_2: "Great cross-platform support and tools",
      },
      pieces: {
        introduction: {
  
        },
        piece_1: {
          type: "drop",
          dropHeaderText: "Book I",
          collapseTag: "piece-collapse-1",
          content: {
            content_1: "He was a man who looked at what ought to be done, not to the reputation which is got by a man's acts.",
          },
          add_styles: "",
        },
        piece_3: {
          type: "drop",
          dropHeaderText: "Book II",
          collapseTag: "piece-collapse-2",
          content: {
            content_1: "When you wake up in the morning, tell yourself: The people I deal with today will be meddling, ungrateful, arrogant, dishonest, jealous, and surly. They are like this because they can't tell good from evil.",
            content_2: "Whatever this is that I am, it is flesh and a little spirit and an intelligence.",
            content_3: "All that is from the gods is full of Providence.",
            content_4: "There is a limit to the time assigned you, and if you don't use it to free yourself it will be gone and never return.",
            content_5: "You will find rest from vain fancies if you perform every act in life as though it were your last.",
            content_6: "Thou seest how few be the things, the which if a man has at his command his life flows gently on and is divine.",
            content_7: "Give thyself time to learn something new and good, and cease to be whirled around.",
            content_8: "This thou must always bear in mind, what is the nature of the whole...",
            content_9: "Yet living and dying, honour and dishonour, pain and pleasure, riches and poverty, and so forth are equally the lot of good men and bad. Things like these neither elevate nor degrade; and therefore they are no more good than they are evil.",
            content_10: "The longest-lived and the shortest-lived man, when they come to die, lose one and the same thing.",
            content_11: "Remember that all is opinion.",
            content_12: "No state sorrier than that of the man who keeps up a continual round, and pries into 'the secrets of the nether world,' as saith the poet, and is curious in conjecture of what is in his neighbour's heart.",
            content_13: "Though thou be destined to live three thousand years and as many myriads besides, yet remember that no man loseth other life than that which he liveth, nor liveth other than that which he loseth",
            content_14: "As for life, it is a battle and a sojourning in a strange land; but the fame that comes after is oblivion.",
          },
          add_styles: ""
        },
        piece_18: {
          type: "drop",
          dropHeaderText: "Book III",
          collapseTag: "piece-collapse-3",
          content: {
            content_1: "What means all this?",
            content_2: "Waste not the remnant of thy life in those imaginations touching other folk, whereby thou contributest not to the common weal.",
            content_3: "The lot assigned to every man is suited to him, and suits him to itself.",
          },
          add_styles: ""
        },
      },
    },
    "3": {
      id: 3,
      featured: false,
      date_published: {
        year_int: 2017,
        month_int: 3,
        day_int: 1,
        month_string: "March",
        sort_int: 20170301,
        formatted: "March 1, 2017",
      },
      date_edited: {
        year_int: 2017,
        month_int: 3,
        day_int: 1,
        month_string: "March",
        sort_int: 20170301,
        formatted: "March 1, 2017",
      },
      category: "web_dev",
      main_img_src: "/images/callback-hell.png",
      title: "JavaScript: A Language for Existentialists",
      blurb: "Kierkeggard, Heidegger, Sartre and Camus all code in JS",
      tldr_points: {
        point_1: "No Exit in Sartre's Callback Hell",
      },
      pieces: {
        introduction: {
  
        },
        piece_1: {
          type: "image",
          content: "/images/callback-hell.png",
          add_styles: "",
        },
      },
    },
  };
  return {
    getFullArticle: function(id) {
      if (Articles[id.toString()]) { return Articles[id.toString()]; }
      else { return Articles["0"] }
    },
    getFeaturedArticle: function() {
      return featuredArticle;
    },
    getArticleDateTitle: function(id) {
      return (({date_published, title}) => 
              ({date_published, title}))
              (Articles[id.toString()]);
    },
    getArticleOverview: function(id) {
      return (({featured, date_published, category, title, blurb, main_img_src}) => 
              ({featured, date_published, category, title, blurb, main_img_src}))
              (Articles[id.toString()]);
    },
    getArticlePieces: function(id) {
      return (({pieces}) => ({pieces}))(Articles[id.toString()]);
    },
    getArticlesOverview: function() {
      var overviewData = {};
      for (var i = 1; i < 4; i++) {
        overviewData[i.toString()] = (({id, featured, date_published, category, title, blurb, main_img_src}) =>
                                      ({id, featured, date_published, category, title, blurb, main_img_src}))
                                      (Articles[i.toString()]);
      }
      return overviewData;
    }
  }
})();