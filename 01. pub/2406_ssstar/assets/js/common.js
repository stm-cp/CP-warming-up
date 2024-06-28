

$(document).ready(function () {
  // header sticky
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 60) {
      $('header').addClass('sticky');
    } else {
      $('header').removeClass('sticky');
    }
  });

  // header gnb
  $('.gnb_list > li').hover(
    function () {
      $(this).find('.gnb_sub_list').addClass('active');
    },
    function () {
      $(this).find('.gnb_sub_list').removeClass('active');
    }
  );
  // tab action
  $('.tab_list_item').on('click', function (e) {
    e.preventDefault();
    var Idx = $(this).index();
    $('.tab_list_item').removeClass('active');
    $(this).addClass('active');
    $('.tabview_list_item').removeClass('active').eq(Idx).addClass('active')
  })
});

