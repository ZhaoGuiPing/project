$(function(){
	
	$('#user,#pass').focus(function(){//焦点进去更换背景色
		$(this).css("backgroundColor","rgb(253, 246, 200)");
	})
	$('#user').bind("input propertychange blur",function(){
		var user = $(this).val();
		//验证邮箱 验证手机
		var reg = /(^1[3|4|5|7|8][0-9]{9}$)|(^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$)/i;
		if(user.length == ""){
			$('#user_text').html('账号不能为空！');
		}else if(!(reg.test(user))){
			$('#user_text').html('账号不正确,请重新输入');
		}else{
			$('#user_text').html('');
		}
	})
	$('#pass').bind("input propertychange blur",function(){
		var psw = $(this).val();
		//支持字母、数字、标点符号、特殊字符
		var rag=(/^(?:(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])|(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9])|(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])|(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])).{6,}|(?:(?=.*[A-Z])(?=.*[a-z])|(?=.*[A-Z])(?=.*[0-9])|(?=.*[A-Z])(?=.*[^A-Za-z0-9])|(?=.*[a-z])(?=.*[0-9])|(?=.*[a-z])(?=.*[^A-Za-z0-9])|(?=.*[0-9])(?=.*[^A-Za-z0-9])|).{6,}$/);
		if(!(rag.test(psw)) || psw.length > 18){
			$('#pass_text').html('您的密码不正确,请您重新输入');
		}else{
			$('#pass_text').html('');
		}
	})
	
	
	
	
})
