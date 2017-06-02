var $win = $(window);

$(function(){

	//***editor頁面控制式響應***//
    //表格做寬度100%;
    //表格內圖片做寬度100%;
    //圖片最大寬度100%;

    $('.editor table').attr('width', '100%');
    $('.editor table').attr('style', 'width:100%;');
    $('.editor table img').attr('width', '');
    $('.editor table img').attr('height', '');

    $('.editor img').attr('style', 'max-width:100%;');




	// 尺寸800以下  響應式控制
    var _width = $win.width();
    if(_width<=800){

    	// $('.editor img').attr('style', 'max-width:100%;');

    }else{



    };  

});


// 翻轉縮放的狀況，上方複寫一次
$win.on("resize orientationchange",function(){

$(function(){

    var _width = $win.width();

    if(_width<=800){

    	// $('.editor img').attr('style', 'max-width:100%;');

    }else{



    };  


});

});