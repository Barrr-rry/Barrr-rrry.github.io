$(function(){


    // 滑到第一屏的一半時，便換成橘色底 (Desktop only)
    $(window).scroll(function(){
        var _top = $(this).scrollTop();
        var _winHeight = Math.floor($(window).height()/2)

        if(_top >= _winHeight){
            $("#header").addClass("as-active");
        }else{
            $("#header").removeClass("as-active");
        }
    });

    $(window).resize(function(){
        var _winWidth = $(window).width();
        if(_winWidth){
            $("#home-slider").css({height: $(window).outerHeight()});
        }
    }).resize();



    // 漢堡選單點選時的效果
    $("#btn-navi").click(function(){
        $(this).toggleClass("as-active");
    });


    // 文章頁跳到指定錨點
    $("a.anchor-link").click(function(e){
        e.preventDefault();
        var _go = $(this).attr("href");
        
        $("body,html").animate({scrollTop: $(_go).offset().top - 100})
    });



    // 訂閱雜誌按鈕
    $(".subscription-button").click(function(e){
        e.preventDefault();
        $(this).toggleClass("as-active");
    });

});