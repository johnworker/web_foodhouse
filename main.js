// 選單效果
$(".menu-btn").click(function () {
    $(".menu-wrap").toggleClass("active");
    $(this).toggleClass("active");
  });

// 首頁動畫變換

// 置頂按鈕
 //滑動至指定位置
 $('.menu a').click(function () {
  E.preventDefault();是為了取消a的預設值
  var btn = $(this).attr('href');
  var pos = $(btn).offset();/* pos自己命名的名稱 */
  $('html,body').animate({ scrollTop: pos.top }, 1000);
});

//捲動至top0的位置
$("#gotop").click(function () {
  $("html,body").animate({
      scrollTop: 0
  }, 1000);
});
//指定捲軸位置淡出淡入
$(window).scroll(function () {
  if ($(this).scrollTop() > 200) {
      $('#gotop').stop().fadeTo('fast', 1);
  } else {
      $('#gotop').stop().fadeOut('fast');
  }
});