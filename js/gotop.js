<script type="text/javascript">

        $(window).bind('scroll',function(){
            var len=$(this).scrollTop()
            if(len>=300){
                $(".gotop").fadeIn(1000);
            }else{
                $(".gotop").fadeOut(1000);
            }
        })
        $(".gotop").click(function(){
            $('body').animate({ scrollTop:0},1000);
        })
    </script>
	
