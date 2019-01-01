$(function(){
	//碰触下拉菜单
	$("#navlift").mouseover(function(){
		$('#navlift_ul').show()
		
	})
	$("#navlift").mouseout(function(){
		$("#navlift_ul").hide()
	})
	
//	head over---------------------------------------------------------
	
	//选择类型和属性
	$(".type span,.property span").hover(function(){
		$(this).addClass("hover");
	},function(){
		$(this).removeClass("hover");
	});
	$(".type span,.property span").click(function(){
		$(this).addClass("cur").siblings().removeClass("cur");
	});
	
	//产品介绍和产品规格选项卡
	$(".bot-right-title li").click(function(){
		var _index = $(this).index();
		$(this).addClass("current").siblings().removeClass("current");
		$(".right-commodity1").eq(_index).show().siblings(".right-commodity1").hide();
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