<script type="text/javascript">
        $(window).bind('scroll',function(){
            var len=$(this).scrollTop()
            if(len>=100){
                //显示回到顶部按钮
                $('#gotop').show();
            }else{
                //影藏回到顶部按钮
                $('#gotop').hide();
            }
        })
        //绑定回到顶部按钮的点击事件
        $('#gotop').click(function(){
            //动画效果，平滑滚动回到顶部
            $(document).animate({ scrollTop: 0 });
            //不需要动画则直接
            //$(document).scrollTop(0)
        })
    </script>