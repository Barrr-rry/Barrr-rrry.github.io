(function($){

    $(function(){
        
        // 滾動動畫
        // new WOW().init();

        //pcmenu 效果
        (function(){
            // var flag = false;
            // $(".pcmenu .menu01>li>a").on("mouseover",function(event){
            //     var e = event || window.event;
            //     e.stopPropagation();
            //     $(this).siblings(".menu02").addClass("hover");
            //     flag = true;
            // })
            // $(".pcmenu .menu01>li").on("mouseover",function(){
            //     if(flag){
            //         $(this).children("a").addClass("hover");
            //         $(this).children(".menu02").addClass("hover");
            //     }
                
            // })
            
            $(".header .bars a").click(function(){
                var wh = parseFloat($(window).width());
                if(wh > 1200){
                    $(".pcmenu").show();
                }else{
                    $(".mobmenu").addClass("active");
                }
               
            })
            $(".pcmenu .close-menu").click(function(){
                $(this).parent().hide();
            })

            $(".mobmenu .close-menu").click(function(){
                $(this).parent().removeClass("active");
            })


        })();


        //mobmenu 效果
        (function(){

                    
            $(".mobmenu .menu01 .icon").click(function(){
                $(this).toggleClass("active");
                $(this).siblings(".menu02").slideToggle();
            })

            
        })()

    })
})(jQuery);