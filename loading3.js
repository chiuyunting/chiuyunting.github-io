$(window).on('load', function(){
    setTimeout(function(){
        $('.loading').fadeOut(); /*讀取畫面淡出*/
        $(window).scrollTop(0); /*畫面滑到最頂端*/
    }, 2000) /*等兩秒*/

});