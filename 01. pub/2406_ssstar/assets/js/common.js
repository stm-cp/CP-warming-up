

$(document).ready(function () {
  // header sticky
  $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
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

  // mobile gnb
  gnbOnmob();
  function gnbOnmob() {
    $('.btn_hmbgr').on('click', function (e) {
      if ($('.gnb_list').hasClass('menuon')) {
        $('.gnb_list').removeClass('menuon');
        $('body').css('overflow', 'hidden auto');
      } else {
        $('.gnb_list').addClass('menuon');
        $('body').css('overflow', 'hidden');
      }

    })
  }
  $(window).resize(function (){
    $('.gnb_list').removeClass('menuon');
    $('body').css('overflow', 'hidden auto');
  })
  // tab action
  $('.tab_list_item').on('click', function (e) {
    var Idx = $(this).index();
    $('.tab_list_item').removeClass('active');
    $(this).addClass('active');
    $('.tabview_list_item').removeClass('active').eq(Idx).addClass('active')
  })
});


// vanilla ver
// document.addEventListener('DOMContentLoaded', function () {

//   // header sticky
//   window.addEventListener('scroll', function () {
//     var header = document.querySelector('header');
//     if (window.pageYOffset > 40) {
//       header.classList.add('sticky');
//     } else {
//       header.classList.remove('sticky');
//     }
//   });

//   // header gnb
//   var gnbSubLists = document.querySelectorAll('.gnb_sub_list');

//   if (gnbSubLists.length > 0) {
//     var gnbListItems = document.querySelectorAll('.gnb_list > li');

//     gnbListItems.forEach(function (item) {
//       item.addEventListener('mouseenter', function () {
//         var gnbSubList = this.querySelector('.gnb_sub_list');
//         if (gnbSubList) {
//           gnbSubList.classList.add('active');
//         }
//       });

//       item.addEventListener('mouseleave', function () {
//         var gnbSubList = this.querySelector('.gnb_sub_list');
//         if (gnbSubList) {
//           gnbSubList.classList.remove('active');
//         }
//       });
//     });
//   }

//   gnbOnmob();

//   function gnbOnmob() {
//     var btnHmbgr = document.querySelector('.btn_hmbgr');
//     var gnbList = document.querySelector('.gnb_list');

//     btnHmbgr.addEventListener('click', function (e) {
//       if (gnbList.classList.contains('menuon')) {
//         gnbList.classList.remove('menuon');
//         document.body.style.overflow = 'hidden auto';
//       } else {
//         gnbList.classList.add('menuon');
//         document.body.style.overflow = 'hidden';
//       }
//     });
//   }


//   window.addEventListener('resize', function () {
//     var gnbList = document.querySelector('.gnb_list');
//     gnbList.classList.remove('menuon');
//     document.body.style.overflow = 'hidden auto';
//   });

//   // tab action
//   var tabListItems = document.querySelectorAll('.tab_list_item');
//   tabListItems.forEach(function (item, index) {
//     item.addEventListener('click', function (e) {
//       e.preventDefault();
//       var tabItems = document.querySelectorAll('.tab_list_item');
//       tabItems.forEach(function (tab) {
//         tab.classList.remove('active');
//       });
//       this.classList.add('active');

//       var tabviewItems = document.querySelectorAll('.tabview_list_item');
//       tabviewItems.forEach(function (tabview) {
//         tabview.classList.remove('active');
//       });
//       var tabviewItem = document.querySelectorAll('.tabview_list_item')[index];
//       tabviewItem.classList.add('active');
//     });
//   });


// });