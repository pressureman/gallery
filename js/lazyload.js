$(function() {
    $("img.lazy").lazyload({
		threshold : 200
		effect : "fadeIn"
		failure_limit : 10
		skip_invisible : false
	});
});