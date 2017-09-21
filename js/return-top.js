	$(document).ready(function(){  
        $("#gototop").hide();  
        $(function () {  
            $(window).scroll(function(){  
                if ($(window).scrollTop()>300){  
                    $("#gototop").fadeIn(500);  
                }else{  
                    $("#gototop").fadeOut(500);  
                }  
            });    
            $("#gototop").click(function(){  
                $('body,html').animate({scrollTop:0},500);  
                return false;  
            });  
        });  
    });  