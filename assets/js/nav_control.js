
var nav_theme_control = (function() {
  var updt_current_theme = "";

  var update_nav = function(theme_req, current_theme, page_name) {
    // in case updt_current_theme was not initialized by layout script
    if (updt_current_theme === "") { updt_current_theme = current_theme; }
    if (theme_req === updt_current_theme) { return; }
    $.ajax({
      url: '/settings-nav',
      method: 'POST',
      data: {new_nav: theme_req},
      success: function(data) {
        //let blog_js handle the html(ized) styles
        /*
        if ((page_name === "blog") && (theme_req === "monokai")) {
          blog_js.monokai_styles(data, updt_current_theme, theme_req);
        }
        */
        // Just reload the whole thing for now
        if ((page_name === "blog") || (page_name === "blog_article")) {
          location.reload();
        }
        // else just handle it here
        else {
          switch_nav(data);
          // set the visible check in the brand dropdown to current theme
          $('#' + updt_current_theme + '-nav-check').css("visibility", "hidden");
          $('#' + theme_req + '-nav-check').css("visibility", "visible");
          if (page_name === "blog") { blog_js.quickBlogOverviewInit(); }
        }
        updt_current_theme = theme_req;
      },
      error: function(error) {
        alert("Ah *%$#" + error);
      }
    });
  };

  function switch_nav(htmlStyles) { $('.navbar-styles').empty().append(htmlStyles); };

  function init_nav_theme(theme) {updt_current_theme = theme};
  //
  return {
    init_nav_theme(theme) {updt_current_theme = theme},
    get_current_nav: function (pageName) { return updt_current_theme; },
    change_nav_theme(new_theme, current_theme, page) {
      update_nav(new_theme, current_theme, page);
    },
  }
})();
