//이미지 하단 버튼을 클릭하면 해당 이미지가 슬라이드
 $(".btn>li").click(function(){
	
	// 첫번째 버튼 클릭시 첫번째 이미지의 마진 값은 0
	// 두번째 버튼 클릭시 첫번째 이미지의 마진 값은 -100%
	// 세번째 버튼 클릭시 첫번째 이미지의 마진 값은 -200%
	// 네번째 버튼 클릭시 첫번째 이미지의 마진 값은 -300%
	var i = $(this).index();
	$(".img").animate({marginLeft:-100 * i + "%"});
	$(".btn>li").removeClass("on");
	$(this).addClass("on");
});

//자동 슬라이드

var n = 0; //숫자로 초기화	
function slide() { 
	n = (n+1) % 4 //1,2,3,0
	$(".img").stop().animate({marginLeft: -100 * n + "%"});
	
 	$(".btn>li").eq(n).addClass("on").siblings().removeClass();
}

//자동 실행 취소 
var auto = setInterval(slide,5000);

	//마우스를 버튼 위에 올리면 자동 슬라이드 멈춤
	$(".btn").mouseenter(function(){
		clearInterval(auto);
	});
	//마우스를 버튼 위에 내리며 자동 슬라이드 실행
	$(".btn").mouseleave(function(){
		auto = setInterval(slide, 5000);
	});	

//내비게이션
$(".open").click(function(){
	$(".navG").animate({left:0});
})	
$(".close").click(function(){
	$(".navG").animate({left:-240});
})	
