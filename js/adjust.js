var $win = $(window);

$(function(){

	// editor頁面控制式響應
    $('.editor table').attr('width', '100%');
    $('.editor img').attr('style', 'max-width:100%;');




	// 尺寸800以下  響應式控制
    var _width = $win.width();
    if(_width<=800){

    	$('.editor img').attr('style', 'max-width:100%;');

    }else{



    };  

	// 測試
    // alert("123");
	// $('.mainmid img').attr('style', 'width:100%');

    // $('img').click(
    //         function(){
    //         	alert("123");
    //         	$('img').attr('style', 'width:100%');
    //         	// $('img').css({"width","100%"});  失敗為什麼
    //         	// $('img').addClass('aa');
    //         }  
    // );

});


// 翻轉縮放的狀況，上方複寫一次

$win.on("resize orientationchange",function(){

$(function(){

    var _width = $win.width();

    if(_width<=800){

    	$('.editor img').attr('style', 'max-width:100%;');

    }else{



    };  


});

});