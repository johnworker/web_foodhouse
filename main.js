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

// 頁籤相簿
$( function() {
  $( "#tabs" ).tabs();
} );

// Ghost_hang
gsap.to(".left_yellowtwo", {
  scrollTrigger: {
    tigger: ".left_yellowtwo",
    toggleActions: "restart none resume none",
    start: "25% 40%",
    end: "30% 20%",
    scrub: 1,
    markers: true
  },

  x: 200,
  y: 60,
  z: 30,
  rotation: -2,
  duration: 3
}

);

//this is where we apply opacity to the arrow
$(window).scroll( function(){

  //get scroll position
  var topWindow = $(window).scrollTop();
  //multipl by 1.5 so the arrow will become transparent half-way up the page
  var topWindow = topWindow * 1.5;
  
  //get height of window
  var windowHeight = $(window).height();
      
  //set position as percentage of how far the user has scrolled 
  var position = topWindow / windowHeight;
  //invert the percentage
  position = 1 - position;

  //define arrow opacity as based on how far up the page the user has scrolled
  //no scrolling = 1, half-way up the page = 0
  $('.arrow-wrap').css('opacity', position);

});




function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("thide");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tab-title");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

