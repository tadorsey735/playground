$(document).ready(function () {
  $('.tree li').each(function () {
    if ($(this).children('ul').length > 0) { $(this).addClass('parent'); }
  });
  $('.tree li.parent > a').click(function () {
    $(this).parent().toggleClass('active');
    $(this).parent().children('ul').slideToggle('fast');
    $(this).children('span.rotate').toggleClass('down');
  });
});

function init_right_panel(yr, mo) {
  var month_link_id = '#' + yr + mo;
  console.log(month_link_id);
  setTimeout(function () {
    //$('.tree-articles#' + yr + mo).css('display', 'block');
    $('.tree-year#' + yr + ' > a').click();
    setTimeout(function () {
      $('.tree-month#' + yr + mo + ' > a').click();
    }, 600);
  }, 2000);
}

