<script type="text/javascript">

        $(window).bind('scroll',function(){
            var len=$(window).scrollTop()
            if(len>=0){
                $("#com-return").css({'display' : 'block'})
            }else{
                $("#com-return").css({'display' : 'none'})
            }
        })
		
        $("#com-return").click(function(){
            $('body').animate({ scrollTop:0},1000);
        })
    </script>
	
