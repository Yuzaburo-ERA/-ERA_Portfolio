$(".q1").click(function(){
	$(".a1").addClass('show').fadeIn();
});

$(".q2").click(function(){
	$('.a2').addClass('show').fadeIn();
});

$(".q3").click(function(){
	$(".a3").addClass('show').fadeIn();
});

$(".q4").click(function(){
	$(".a4").addClass('show').fadeIn();
});

$(".q5").click(function(){
	$('.a5').addClass('show').fadeIn();
});

$(".q6").on("click",(function(){
	$('.a6')
	.addClass('show')
	.fadeIn();
});

$(".close").click(function(){
	$(".popout").fadeOut();
});