$(function(){
	$(window).on('scroll', function(){
		if($(window).scrollTop() > 200) {
			$("header").addClass("sticky");
		}else {
			$("header").removeClass("sticky");
		}
	});

	$("img").lazyload({
      effect : "fadeIn"
  });
















})