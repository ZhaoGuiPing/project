$(function(){
	//碰触下拉菜单
	$("#navlift").mouseover(function(){
		$('#navlift_ul').show()
		
	})
	$("#navlift").mouseout(function(){
		$("#navlift_ul").hide()
	})
	
//	head over---------------------------------------------------------
	
	
	//现有收获地址
	$('.shoudizhi-div1 input').click(function(){
		if($(this).attr('checked')=="checked"){
			$(this).parent('div').css('background','#F2E5D1').siblings('.shoudizhi-div1').children('input').removeAttr("checked")
			$(this).parent('div').css('background','#F2E5D1').siblings('.shoudizhi-div1').css('background','#FFFFFF')
		}
	})
	//删除地址
	$('.delect1').click(function(){
		$('.shoudizhi-div11').css('display','none')
	})
	$('.delect2').click(function(){
		$('.shoudizhi-div2').css('display','none')
	})
	$('.delect3').click(function(){
		$('.shoudizhi-div3').css('display','none')
	})
	//修改地址
	$('.alter').click(function(){
		$('#overlay').show();
		$('#banner').show();
		
	})
	$('#close').click(function(){
		$('#overlay').hide();
		$('#banner').hide();
	})
	$('.xinzeng').click(function(){
		$('#overlay').show();
		$('#banner').show();
	})
	
//	---------------------------------------------------------------------
	$('.serach-box').focus(function(){
		if($(this).val()==this.defaultValue){
			$(this).val("").css('color','black')
		}
	}).blur(function(){
		if($(this).val()==""){
			$(this).val(this.defaultValue).css('color','#999999')
		}
	})
	
//	---------------------------------------------------------------------
	$(window).scroll(function(event) {
            var h = $(window).scrollTop();
            console.log(h);
            if(h>=400){			//淡入
                $(".ReturnTop").fadeIn(1000);
            }else{				//淡出
                $(".ReturnTop").fadeOut(1000);
            }
        });
        $(".ReturnTop").click(function() {
            $('body,html').animate({
                scrollTop:0
            },500);
        })
	
	
	
	
	
	
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