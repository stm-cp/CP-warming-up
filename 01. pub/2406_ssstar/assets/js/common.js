

$(document).ready(function () {
  // tab action
  $('.tab_list_item').on('click',function(e){
    e.preventDefault();
    
    var Idx = $(this).index();
    $('.tab_list_item').removeClass('active');
    $(this).addClass('active');
    $('.tabview_list_item').removeClass('active').eq(Idx).addClass('active')
    
  })
});

