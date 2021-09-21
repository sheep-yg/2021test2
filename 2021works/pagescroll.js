// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5; // 동작의 구현이 시작되는 위치 
var navbarHeight = $('header').outerHeight();// 영향을 받을 요소를 선택
var subbarHeight = $('.frame').outerHeight();//모바일서브메뉴

// 스크롤시에 사용자가 스크롤했다는 것을 알림
$(window).scroll(function(event){
	didScroll = true;
});

// hasScrolled()를 실행하고 didScroll 상태를 재설정
setInterval(function() {
	if (didScroll) { hasScrolled(); didScroll = false; }
}, 250);

function hasScrolled() { var st = $(this).scrollTop();

// Make sure they scroll more than delta
if(Math.abs(lastScrollTop - st) <= delta) return;

// If they scrolled down and are past the navbar, add class .nav-up.
// This is necessary so you never see what is "behind" the navbar.

if (st > lastScrollTop && st > subbarHeight){
// Scroll Down
$('#frame').removeClass('mainM-down').addClass('mainM-up');
} else {
// Scroll Up
if(st + $(window).height() < $(document).height()) {
 $('#frame').removeClass('mainM-up').addClass('mainM-down');
  }
}
//모바일서브메뉴

if (st > lastScrollTop && st > navbarHeight){
// Scroll Down
$('header').removeClass('nav-down').addClass('nav-up');
} else {
// Scroll Up
if(st + $(window).height() < $(document).height()) {
 $('header').removeClass('nav-up').addClass('nav-down');
  }
}

lastScrollTop = st;
}
