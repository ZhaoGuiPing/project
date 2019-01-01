$(function(){
	//碰触下拉菜单
	$("#navlift").mouseover(function(){
		$('#navlift_ul').show()
		
	})
	$("#navlift").mouseout(function(){
		$("#navlift_ul").hide()
	})
	
//	head over---------------------------------------------------------
	
$(".aggregate-right p.p-one").html("商品总额："+heji()+".00积分");
	$(".aggregate-right p.p-three").children("span").html(heji()+".00");
	function heji(){
		var price = $("table tr td.price");
		var heji = 0;
		price.each(function(index,value){
			var a = price.eq(index).children("span").text()*price.eq(index).siblings(".num").text();
			heji += a;
		})
		return heji;
	}
















//-------------------------------------------------------------------------
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