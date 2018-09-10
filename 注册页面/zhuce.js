
	/*遮罩层*/
	$(window).load(function(){
	//使用定时器来显示遮罩层的属性
	var g=setInterval(function(){
	$('.mask').css("height",$(document).height());
	$('.mask').css("width",$(document).width());
	$('.mask').show();
	$('.tianjia').show();
	},1000);	
	//点击button按钮来返回上一层	
	$('.tianjia .guanbi:eq(0)').click(function(){
	$('.mask').fadeOut();
	//清除定时器
	clearInterval(g);
	$('.tianjia').fadeOut();
	});
	//点击同意
	$('.anniu .tongyi:eq(0)').click(function(){
		clearInterval(g);
		$('.tianjia').fadeOut();
		$('.mask').fadeOut();
	})
	//点击取消
	$('.anniu .quxiao:eq(0)').click(function(){
		clearInterval(g);
		$('.mask').fadeOut();
		$('.tianjia').fadeOut();
	})
	
});
/*表单验证*/
	$(function(){

		function msg(msga,bool){

			var info='';
			
			if(bool){
				info='<img src="./注册/right.png"/><span>'+msga+'</span>';
			}else{
				info='<img src="./注册/error.png"/><span>'+msga+'</span>';
			}

			return info;
		
		}	
		//手机号失去焦点
		$('#tel').blur(function(){
		
			var value=$(this).val();
		
		
			var reg=/^[a-zA-Z0-9]{6,}$/;
			if(reg.test(value)){
			
				$(this).next().html(msg('格式正确',true));
			}else{
			
				$(this).next().html(msg('格式不正确',false));
			}
		});
	})
