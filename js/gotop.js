<script>    
window.onload=function(){    
    var oBtn = document.getElementById('btn');    
    var timer = null;    
    var bFlag = false;    
    oBtn.onclick=function(){    
        moveScroll(0,3000);
     
    };    
         
    window.onscroll=function(){    
        if(bFlag)    
        {    
            clearInterval(timer);    
        }  
        bFlag=true;    
    };    
             
    function moveScroll(target,time)    
    {    
        var start = document.documentElement.scrollTop || document.body.scrollTop;    
        var dis = target - start;    
        var count = Math.floor(time/30);    
        var n=0;    
             
        clearInterval(timer);    
        timer = setInterval(function(){    
            n++;    
            bFlag=false;    
            document.documentElement.scrollTop = start + dis*n/count;    
            document.body.scrollTop = start+dis*n/count;    
            if(n==count)    
            {    
                clearInterval(timer);    
            }  
     
        },30);    
    }    
};    
</script>