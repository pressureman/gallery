<script type="text/javascript">

        $(window).bind('scroll',function(){
            var len=$(window).scrollTop()
            if(len>=0){
                $("#return").css({'display' : 'block'})
            }else{
                $("#return").css({'display' : 'none'})
            }
        })
		
        $("#return").click(function(){
            $('body').animate({ scrollTop:0},1000);
        })
    </script>
	
