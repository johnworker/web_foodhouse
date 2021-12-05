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

// left_yellowtwo
gsap.to(".left_yellowtwo", {
  scrollTrigger: {
    tigger: ".left_yellowtwo",
    toggleActions: "restart none resume none",
    start: "25% 40%",
    end: "30% 20%",
    scrub: 1,
    // markers: true
  },

  x: 200,
  y: 60,
  z: 30,
  rotation: -2,
  duration: 3
}

);

// left_yellowfour
gsap.to(".left_yellowfour", {
  scrollTrigger: {
    tigger: ".left_yellowfour",
    toggleActions: "restart none resume none",
    start: "25% 40%",
    end: "30% 20%",
    scrub: 1,
    // markers: true
  },

  y: 30,
  rotation: -2,
  duration: 3
}

);

// left_yellowone
gsap.to(".left_yellowone", {
  scrollTrigger: {
    tigger: ".left_yellowone",
    toggleActions: "restart none resume none",
    start: "25% 40%",
    end: "30% 20%",
    scrub: 1,
    // markers: true
  },

  x: -80,
  y: 10,
  rotation: -1,
  duration: 3
}

);

// fake_cake
gsap.to(".fake_cake", {
  scrollTrigger: {
    tigger: ".fake_cake",
    toggleActions: "restart none resume none",
    start: "45% 40%",
    end: "50% 20%",
    scrub: 1,
    // markers: true
  },

  x: -160,
  y: 80,
  rotation: -1,
  duration: 3
}

);

// big_cake
gsap.to(".big_cake", {
  scrollTrigger: {
    tigger: ".big_cake",
    toggleActions: "restart none resume none",
    start: "50% 40%",
    end: "55% 20%",
    scrub: 1,
    // markers: true
  },

  y: -80,
  duration: 3
}

);


// chocolate_fly
gsap.to(".chocolate_fly", {
  scrollTrigger: {
    tigger: ".chocolate_fly",
    toggleActions: "restart none resume none",
    start: "50% 40%",
    end: "55% 20%",
    scrub: 1,
    // markers: true
  },

  y: -80,
  duration: 3
}

);

// donut_fly
gsap.to(".donut_fly", {
  scrollTrigger: {
    tigger: ".donut_fly",
    toggleActions: "restart none resume none",
    start: "50% 40%",
    end: "55% 20%",
    scrub: 1,
    // markers: true
  },

  y: -80,
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

