$(function(){
  /** 2가지 유형 
   * 1. 현재 하위(this) 뎁스만 보임
   * 2. 전체 하위 뎁스 표시
  */
  $('#gnb .depth1 > li').hover(
    // mouseover
    function(){
      $(this)
        .children('.depth2')
        .addClass('on');
    },
    // mouseout
    function(){
      $(this)
      .children('.depth2')
      .removeClass('on');
    }
  );

  // slider
  let num = 0;  // 이미지 번호(전역변수)

  function changeSlider(a) {
    // 공식 = 높이값(세로기준) * 이미지 번호
    let img_height = 300 * a;

    $('.slider .sliders').css({
      transform: `translateY(${-img_height}px)`
    })
  }

  // 자동재생
  setInterval(function(){
    num++;
    // 마지막 번호이면 처음으로
    if(num > 2) { num = 0; }
    changeSlider(num);
  }, 3000);


  //공지사항/갤러리 tab 버튼
  $('.tab_buttons .notice-btn').click(function(){
    //탭 초기화
    $('.tab_contents').removeClass('on');
    //표시
    $('#notice').addClass('on');
  });

  $('.tab_buttons .gallery-btn').click(function(){
    //탭 초기화
    $('.tab_contents').removeClass('on');
    //표시
    $('#gallery').addClass('on');
  });

  $('.tab_contents on').click(function(){
    //탭 초기화
    $('.tab_contents').removeClass('on');
    //표시
    $('#modal').addClass('on');
  });

  $('.tab_buttons .gallery-btn').click(function(){
    //탭 초기화
    $('.tab_contents').removeClass('on');
    //표시
    $('#gallery').addClass('on');
  });

}); // $