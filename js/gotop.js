<script type="text/javascript">

        $(window).bind('scroll',function(){
            var len=$(window).scrollTop()
            if(len>=0){
                $("#return-top").css({'display' : 'block'})
            }else{
                $("#return-top").css({'display' : 'none'})
            }
        })
		
        $("#return-top").click(function(){
            $('body').animate({ scrollTop:0},1000);
        })
    </script>
	
