window.addEventListener('load', () => {
  ReviewSet(0); // 첫번째 리뷰 보여주기.
});

// Recent Reviews 섹션에서 이미지 버튼을 눌렀을 때 해당하는 리뷰를 세팅.
function ReviewSet(idx){
  const listLength = document.querySelectorAll('.img_btn_wrap ul li').length;

  // 인덱스와 동일하면 li의 class에 active add, 아니라면 active remove.
  for(let i = 0; i < listLength; i++) {
    if(i === idx) {
      document.querySelectorAll('.img_btn_wrap ul li')[i].classList.add('active');
      document.querySelectorAll('.reviews_txt_wrap ul li')[i].classList.add('active');
    } else {
      document.querySelectorAll('.img_btn_wrap ul li')[i].classList.remove('active');
      document.querySelectorAll('.reviews_txt_wrap ul li')[i].classList.remove('active');
    }
  }
}