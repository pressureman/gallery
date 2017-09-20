$(document).ready(function(){  
	$("#return").hide();
	
	$(function(){
		
        $(window).scroll(function(){
            if($(window).scrollTop()>=100){
                $("#return").fadeIn(500);
            }else{
                $("#return").fadeOut(500);
            }
        });
		
        $("#return").click(function(){
            $('body,html').animate({ scrollTop:0},1000);
			return false;
        });
		
	});	
	
});	

