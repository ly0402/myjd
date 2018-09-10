/*《京东隐私政策》遮罩层*/
function show(){
	$('.ysc').css("height",$(document).height());
	$('.ysc').css("width",$(document).width());
	$('.ysc').show();
	$('#ys').show();
}
$('#ys button:eq(0)').click(function(){
	$('.ysc').fadeOut();
});
/*扫码和账户的切换*/
$(function(){
	$('.red1').click(function(){
		$('.red1').css('color','#e4393c');
		$('.red2').css('color','black');
		$('#sm').css('visibility','visible');
		$('#zh').css('visibility','hidden');
	})
	$('.red2').click(function(){
		$('.red2').css('color','#e4393c');
		$('.red1').css('color','black');
		$('#zh').css('visibility','visible');
		$('#sm').css('visibility','hidden');
	})
});


	// /*ajax 验证*/

	// var user=document.getElementById("username");
	// var yza=document.getElementById("yza");
	
	// user.onblur=function(){
	
	// 	var uname=this.value;
		
		
	// 	Ajax().post('yza.php','un='+uname,function(amsg){
				
	// 			if(amsg=='y'){
					
	// 				yza.innerHTML='对不起，该用户名已注册';
	// 			}else{
					
	// 				yza.innerHTML='恭喜，该用户名可以使用';
	// 			}
		
	// 	});
	// }


	/*表单验证*/
	$(function(){

		function msg(msga,bool){
	
			var info='';
			
			if(bool){
				info='<img src="./登录/right.png"/><span>'+msga+'</span>';
			}else{
				info='<img src="./登录/error.png"/><span>'+msga+'</span>';
			}

			return info;
		
		}	
		//用户失去焦点
		$('#username').blur(function(){
			var value=$(this).val();
		
			var reg=/^\d{6,20}$/;
		
			if(reg.test(value)){
				
				$(this).next().html(msg('格式正确',true));
			}else{
				
				$(this).next().html(msg('格式不正确',false));
			}
		});		
		//密码失去焦点
		$('#password').blur(function(){
			var value=$(this).val();
			
			var reg=/^[a-zA-Z0-9]{6,}$/;

			if(reg.test(value)){
				$(this).next().html(msg('格式正确',true));
			}else{
				$(this).next().html(msg('格式不正确',false));
			}
		});
	})
