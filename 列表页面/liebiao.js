
/*页面楼层安排*/
$(function(){
	$('ul li').click(function(){

		var index=$(this).index();

		var top=$('.floor').eq(index).offset().top;
					

		$('body,html').animate({
			scrollTop:top
		},500);
	});		

	var heights=[];
				
	$('.floor').each(function(){

	heights.push($(this).offset().top);
	});

	console.log(heights);

	$(window).scroll(function(){
	var top=$(window).scrollTop();

	var index;

	for(var i=0;i<heights.length;i++){

		if(top>=heights[i] && top<heights[i+1]){

			index=i;
			$('#lou li').eq(index).css('background','#8a5237').siblings().css('background','white');
			break;
		}else if(top>=heights[heights.length-1]){

			index=heights.length-1;
			$('#lou li').eq(index).css('background','#8a5237').siblings().css('background','white');
			break;
			}
		}
	})
			
})
/*全部分类下拉*/
$(function(){
	$('.qbfl').mouseover(function(){
		$('.hb-left ul').css('display','block');
		$('.hb-left ul').css('float','left');
	})

	$('.hb-left').mouseleave(function(){
		$('.hb-left ul').css('display','none');
	})
	
});

/*banner轮播*/

var now=0;
var leng=$('#banner-right>.img>li').length;
console.log(leng);

function run(){
	s=setInterval(function(){
		$('#banner-right>.img>li').hide();
		$('#banner-right>.num>li').css('background','gray');

		if(now>=leng-1){
			now=0;
		}else{
			now++;
		}

		$('#banner-right>.img>li:eq('+now+')').show();
		$('#banner-right>.num>li:eq('+now+')').css('background','red');
	},1000);
}
run();

$('#banner-right').mouseover(function(){

	$('#lb>.num>li').mouseover(function(){
		clearInterval(s);
		$('#lb>.img>li').hide();
		$('#lb>.num>li').css('background','gray');

		now=$(this).index();
		$('#lb>.img>li:eq('+now+')').show();
		$('#lb>.num>li:eq('+now+')').css('background','red');

	});
});

/*瀑布流*/

	var pb=document.getElementsByClassName('pb');
	console.log(pb);

	var sl=1;

	function CreateLi(pb,sl){

		var li=document.createElement('li');

		li.style.height=rand()+'px';

		li.innerHTML=sl;

		li.style.backgroundImage='url(./pb/'+randomColor()+'.jpeg)';
		li.style.backgroundSize='100% 100%';

		pb.appendChild(li);
	}

	function rand(){
		return Math.floor(Math.random()*300)+100;
	}

	function randomColor(){
		var color=Math.floor(Math.random()*4)+1;
		return color;
	}

	function statr(){
		
		for(var p=0;p<35;p++){
			
			var ArrHeight=[pb[0].offsetHeight,pb[1].offsetHeight,pb[2].offsetHeight,pb[3].offsetHeight,pb[4].offsetHeight];
		
			var  index=mini(ArrHeight);
			
			CreateLi(pb[index],sl++)
		}
	}

	statr();
	

	function mini(arr){
		
		var miniHeight=arr[0];
	
		for(p=0;p<arr.length;p++){
		
			if(arr[p]<miniHeight){
				miniHeight=arr[p]
			}
		}
	
		return arr.indexOf(miniHeight);
	}

	window.onscroll=function(){
		
		var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
		
		var clientHeight=document.documentElement.clientHeight||document.body.clientHeight||window.innerHeight;
		console.log(scrollTop);
		console.log(clientHeight);
		
		if(document.documentElement.offsetHeight-clientHeight<=scrollTop){
		
			statr();
		
		}
	};


