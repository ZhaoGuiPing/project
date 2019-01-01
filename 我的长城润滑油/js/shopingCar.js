$(function(){
	//碰触下拉菜单
	$("#navlift").mouseover(function(){
		$('#navlift_ul').show()
		
	})
	$("#navlift").mouseout(function(){
		$("#navlift_ul").hide()
	})
	
//	head over---------------------------------------------------------
	
	
	
//	var all=$"#sectPx";
//	var 
	
	
function outDe(){
	$("input[name='items']:checked").each(function(){
		var xid=$(this).val();
		if( this.checked === true ){
			$("#cartTr"+xid).remove();
		}
		//所选商品总额
		var soloTotal;
		var totalNum='0';
		soloTotal = parseInt( $("#digital_x"+xid).html() );//单个商品总额
		totalNum=parseInt(totalNum)+soloTotal;
		$(".totalNum").html(totalNum);	
		//已选商品数量
		var $tmp=$('[name=items]:checkbox').length;
		$(".electNum").text( $tmp );
		if($("input[name='items']:checked").length==0){
			$(".electNum").text(0);
			$(".totalNum").html(0)
		}
	});	
}	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
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