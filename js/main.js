(function($){
	"use strict";

	$(window).load(function() {
		var $container = $('#fh5co-projects-feed'),
		containerWidth = $container.outerWidth();

		$container.masonry({
			itemSelector : '.fh5co-project',
			columnWidth: function( containerWidth ) {
				if( containerWidth <= 334	 ) {
					return 310;
				} else {
					return 334;
				}
			},

			isAnimated: !Modernizr.csstransitions
		});
	});

})(window.jQuery);