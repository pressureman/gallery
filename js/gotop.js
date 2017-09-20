<script>    
$(document).ready(function(){
	$("#gotop").hide();
 
	$(function () {
		$(window).scroll(function(){
			if ($(window).scrollTop()>600){
				$("#gotop").fadeIn(500);
			}
				else{
					$("#gotop").fadeOut(500);
				}		
		});

			$("#gotop").click(function(){
				$('body,html').animate({scrollTop:0},500);
				return false;
			});
	});
});
</script>