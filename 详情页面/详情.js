/*全部分类下拉*/
$(function(){
	$('.qbfl').mouseover(function(){
		$('.hm-left ul').css('display','block');
		$('.hm-left ul').css('float','left');
	})

	$('.hm-left').mouseleave(function(){
		$('.hm-left ul').css('display','none');
	})
	
});
/*放大镜*/
$(function(){
		$('#small').mousemove(function(e){
			$('#move,#big').show();

			//move的坐标
			var x=e.pageX-$(this).offset().left;
			var y=e.pageY-$(this).offset().top;

			//鼠标居中-move一半宽高
			var x=x-$('#move').width()/2;
			var y=y-$('#move').height()/2;

			//边界判断
			if(x<=0){
				x=0;
			}
			if(y<=0){
				y=0;
			}
			if(x>=$('#small').width()-$('#move').width()){
				x=$('#small').width()-$('#move').width();
			}
			if(y>=$('#small').height()-$('#move').height()){
				y=$('#small').height()-$('#move').height();
			}

			//move绑定坐标
			$('#move').css({left:x,top:y});

			//big small 比例关系
			var scale=$('#big>img').width()/$('#small>img').width();
			//alert(scale);

			//big的移动距离=move距离*比例关系
			$('#big').scrollLeft(x*scale);
			$('#big').scrollTop(y*scale);

			//bpic.src=spic.src
			$('#big>img').attr('src',$('#spic').attr('src'))

		}).mouseout(function(){
			$('#move,#big').hide();
		});
		//点击更换图片
		$('#dian>li>img').click(function(){
			//spic.src=this.Elem
			$('#small>img').attr('src',$(this).attr('src'));
		})

		//left的点击
	$('.lt').click(function(){
		//当前隐藏 图片数字
		$('#dian>li>img').hide();
		now--;
		//往左点 --
		if(now<0){
			now=leng-1;
		}
		//显示图片数字
		$('#dian>li>img>:eq('+now+')').show();
	});

	//right的点击
	$('.gt').click(function(){
		//当前隐藏 图片数字
		$('#dian>.img>li').hide();
		now++;
		//往右点 --
		if(now>leng-1){
			now=0;
		}
		//显示图片数字
		$('#dian>.img>li:eq('+now+')').show();
	});

	});
/*配送至*/

$(function(){
	$('.pei').mouseover(function(){
		$('.xuan').css('display','block');
	});
	$('.xuan').mouseleave(function(){
		$('.xuan').css('display','none');

	})
	$('.bei1').click(function(){
		$('.bei2').css('border','none');
		$('.bei3').css('border','none');
		$('.bei1').css('border-top','2px solid #b61d1d');
		$('.bei1').css('border-left','2px solid #b61d1d');
		$('.bei1').css('border-right','2px solid #b61d1d');
		$('.bei1').css('border-bottom','2px solid white');
		$('.beione').css('visibility','visible');
		$('.beitwo').css('visibility','hidden');
		$('.beithree').css('visibility','hidden');
	});
	$('.bei2').click(function(){
		$('.bei1').css('border','none');
		$('.bei3').css('border','none');
		$('.bei2').css('border-top','2px solid #b61d1d');
		$('.bei2').css('border-left','2px solid #b61d1d');
		$('.bei2').css('border-right','2px solid #b61d1d');
		$('.bei2').css('border-bottom','2px solid white');
		$('.beione').css('visibility','hidden');
		$('.beitwo').css('visibility','visible');
		$('.beithree').css('visibility','hidden');
	});
	$('.bei3').click(function(){
		$('.bei1').css('border','none');
		$('.bei2').css('border','none');
		$('.bei3').css('border-top','2px solid #b61d1d');
		$('.bei3').css('border-left','2px solid #b61d1d');
		$('.bei3').css('border-right','2px solid #b61d1d');
		$('.bei3').css('border-bottom','2px solid white');
		$('.beione').css('visibility','hidden');
		$('.beitwo').css('visibility','hidden');
		$('.beithree').css('visibility','visible');
	})
})
/*白条分期*/
$(function(){
	//1
	$('.in1').mouseover(function(){
		$('.bt1').css('visibility','visible');
		$('.in1').css('border','1px solid #b61d1d')
	})
	$('.bt1,.in1').mouseout(function(){
		$('.bt1').css('visibility','hidden');
		$('.in1').css('border','1px solid #9f9f9f')
	})
	//2
	$('.in2').mouseover(function(){
		$('.bt2').css('visibility','visible');
		$('.in2').css('border','1px solid #b61d1d')
	})
	$('.bt2,.in2').mouseout(function(){
		$('.bt2').css('visibility','hidden');
		$('.in2').css('border','1px solid #9f9f9f')
	})
	//3
	$('.in3').mouseover(function(){
		$('.bt3').css('visibility','visible');
		$('.in3').css('border','1px solid #b61d1d')
	})
	$('.bt3,.in3').mouseout(function(){
		$('.bt3').css('visibility','hidden');
		$('.in3').css('border','1px solid #9f9f9f')
	})
	//4
	$('.in4').mouseover(function(){
		$('.bt4').css('visibility','visible');
		$('.in4').css('border','1px solid #b61d1d')
	})
	$('.bt4,.in4').mouseout(function(){
		$('.bt4').css('visibility','hidden');
		$('.in4').css('border','1px solid #9f9f9f')
	})
	//5
	$('.in5').mouseover(function(){
		$('.bt5').css('visibility','visible');
		$('.in5').css('border','1px solid #b61d1d')
	})
	$('.bt5,.in5').mouseout(function(){
		$('.bt5').css('visibility','hidden');
		$('.in5').css('border','1px solid #9f9f9f')
	})
})
/*选择数量增减*/
// 点击 = 按钮执行运算的操作
$(function(){
	$('.z').click(function(){
		$('.j').css('color','black');
		var s=$('.s').val();
		var shu=parseInt(s)+1;
		if(shu==101){
			return;
		}
		$('.s').val(shu);
	})
	$('.j').click(function(){
		var s=$('.s').val();
		var shu=parseInt(s)-1;
		if(shu<=1){
			shu=1;
			this.style.color="#9f9f9f";

		}
		if(shu>=2){
			this.style.color="black";
		}
		$('.s').val(shu);
	})

});
/*main1 右侧竖轮播*/
$(function(){

	//声明下标
	var now=0;
	//获取li标签的高度
	var hei=$('#slb>.cont>li').length;
	console.log(hei);

	function run(){
		//自动轮播
		s=setInterval(function(){
			//当前隐藏 图片
			$('#slb>.cont>li').hide();

			//下一张显示 
			//判断now
			if(now>=hei-1){
				now=0;
			}else{
				now++;
			}

			//显示图片
			$('#slb>.cont>li:eq('+now+')').show();
		},6000 );
	}
	run();
	//top的点击
	$('.top').click(function(){
		//当前隐藏 图片
		$('#slb>.cont>li').hide();
		now--;
		//往上走 --
		if(now<0){
			now=hei-1;
		}
		//显示图片
		$('#slb>.cont>li:eq('+now+')').show();
	});

	//bottom的点击
	$('.bottom').click(function(){
		//当前隐藏 图片
		$('#slb>.cont>li').hide();
		now++;
		//往下走 ++
		if(now>hei-1){
			now=0;
		}
		//显示图片
		$('#slb>.cont>li:eq('+now+')').show();
	});
})
$(function(){
		//设置li的移入事件
	$('.dao ul li').click(function(){
		//显示当前li 其余隐藏
		$(this).addClass('selected').siblings().removeClass('selected');
		//获取当前下标
		var index=$(this).index();
		$('.nei>div').eq(index).show().siblings().hide();
	})
})
