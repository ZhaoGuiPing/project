$(function(){
	//碰触下拉菜单
	$("#navlift").mouseover(function(){
		$('#navlift_ul').show()
		
	})
	$("#navlift").mouseout(function(){
		$("#navlift_ul").hide()
	})
	
//	head over---------------------------------------------------------
	

//活动机制/下单流程/质保机制/服务中心、切换JS
//function tabSwitch(obj,objTab){
//	$(obj).first().show();
//	$(objTab).first().addClass(".navoul_first");
//	$(objTab).click(function(){//鼠标点击
//		$(this).addClass(".navoul_first").siblings().removeClass(".navoul_first");
//		var name=$(this).attr("name");
//		if($(obj).has(name)){
//			$(obj).hide();
//			$(obj+"."+name).show();	
//		};
//	});
//};
$(".navoul li").click(function(){
	var _index = $(this).index();
	$(this).addClass("navoul_frist").siblings("li").removeClass("navoul_frist");
	$("div.erji").children("div").eq(_index).show().siblings().hide()
})
//活动机制/下单流程/质保机制/服务中心、切换JS
$(function(){	
	tabSwitch(".erjiye",".navoul li");
});	
	



	

	
	//返回顶部JS
	var $backToTopTxt = "", $backToTopEle = $('<div class="backToTop"></div>').appendTo($("body"))
		.text($backToTopTxt).attr("title", $backToTopTxt).click(function() {
			$("html, body").animate({ scrollTop: 0 }, 120);
	}), $backToTopFun = function() {
		var st = $(document).scrollTop(), winh = $(window).height();
		(st > 0)? $backToTopEle.show(): $backToTopEle.hide();
		//IE6下的定位
		if (!window.XMLHttpRequest) {
			$backToTopEle.css("top", st + winh - 166);
		}
	};
	$(window).bind("scroll", $backToTopFun);
	$(function() { $backToTopFun(); });
	
	
	
})
