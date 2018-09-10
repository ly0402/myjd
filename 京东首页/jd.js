/*广告清除*/
var wrap=document.getElementById('wrap');
var gg=document.getElementById('gg');
var body=document.getElementsByTagName('body');
gg.onclick=function(){
	gg.style.display="none";
};
/*顶部二级菜单*/

$(function(){
	//我的京东
	$('#wdjdx').mouseenter(function(){
		$('#wdjd').css('display','block');
	});
	$('#wdjd').mouseleave(function(){
		$('#wdjd').css('display','none');
	})
	//客户服务
	$('#khfwx').mouseenter(function(){
		$('#khfw').css('display','block');
	});
	$('#khfw').mouseleave(function(){
		$('#khfw').css('display','none');
	})
})
/*倒计时*/
	setInterval(function(){
		var d1=new Date();
		var d2=new Date('2019/9/6');
		var cha=d2.valueOf()-d1.valueOf();
		console.log(cha);
		var day=Math.floor(cha/(1000*60*60*24));
		cha%=1000*60*60*24;
		var hour=Math.floor(cha/(1000*60*60));
		cha%=1000*60*60;
		var minute=Math.floor(cha/(1000*60));
		cha%=1000*60;
		var second=Math.floor(cha/(1000));
		box.innerHTML=hu(hour)+" "+hu(minute)+" "+hu(second)+" ";
	},1000);

	function hu(num){
		if(num<10)num='0'+num;
		return num;

	}

	
/*banner轮播*/

	var lis=document.getElementById("img").getElementsByTagName("li");

	var dian_lis=document.getElementById("dian").getElementsByTagName("li");
	 var left=document.getElementById('left');
	 var right=document.getElementById('right');

	var i=0;

	function autoRun(){
		run=setInterval(function(){
			lis[i].removeAttribute('class');


			dian_lis[i].firstElementChild.removeAttribute('class');
			i++;
			if(i==lis.length){
				
				i=0;
			}
			
			lis[i].setAttribute('class','img_active');
			
			dian_lis[i].firstElementChild.setAttribute('class','dian_active');
		},1000)
	}

	autoRun();

	for(var j=0;j<lis.length;j++){
		lis[j].onmouseover=function(){
			clearInterval(run);
			left.style.display="block";
			right.style.display="block";

		}
		lis[j].onmouseout=function(){
			autoRun();
			left.style.display="none";
			right.style.display="none";
		}
	}
	for(var k=0;k<dian_lis.length;k++){

		dian_lis[k].index=k;
		dian_lis[k].onmouseover=function(){
		
			clearInterval(run);

			lis[i].removeAttribute('class');
			dian_lis[i].firstElementChild.removeAttribute('class');
		
			i=this.index;

			lis[i].setAttribute('class','img_active');
			dian_lis[i].firstElementChild.setAttribute('class','dian_active')

		}

		dian_lis[k].onmouseout=function(){

			autoRun();
		}
	}

	right.onmouseover=function(){
	
		left.style.display="block";
		right.style.display="block";
		
		clearInterval(run);
	}
	right.onmouseout=function(){
		
		left.style.display="none";
		right.style.display="none";

		autoRun();
	}

	right.onclick=function(){
		lis[i].removeAttribute('class');
		dian_lis[i].firstElementChild.removeAttribute('class');

		i++;
		
		if(i==lis.length){
			i=0;
		}
		
		lis[i].setAttribute('class','img_active');
		dian_lis[i].firstElementChild.setAttribute('class','dian_active');
	}


	
	left.onmouseover=function(){
	
		left.style.display="block";
		right.style.display="block";
	
		clearInterval(run);
	}
	left.onmouseout=function(){
	
		left.style.display="none";
		right.style.display="none";
	
		autoRun();
	}
	
	left.onclick=function(){
		lis[i].removeAttribute('class');
		dian_lis[i].firstElementChild.removeAttribute('class');

		i--;
		
		if(i<0){
			i=lis.length-1;
		}
		
		lis[i].setAttribute('class','img_active');
		dian_lis[i].firstElementChild.setAttribute('class','dian_active');
	}


$(function(){

	$('.m2l-middle ul li').mouseenter(function(){
		
		$(this).addClass('selected').siblings().removeClass('selected');
		
		var index=$(this).index();
		$('.m2l-bottom>ul').eq(index).show().siblings().hide();
	});
})

/*自行车轮播*/
var list=document.getElementById('list');
var prev=document.getElementById('prev');
var next=document.getElementById('next');
var cont=document.getElementById('cont');
function car(offset){
	var newleft=parseInt(list.style.left)+offset
	if(newleft<-300){
		newleft=-100;
	}
	if(newleft>-100){
		newleft=-300;
	}
	list.style.left=newleft+'px';
}
next.onclick=function(){
	car(-20);
}
prev.onclick=function(){
	car(20);
}
function cd(){
	dong=setInterval(function(){
		next.onclick();
	},1000);
}
cd();
cont.onmouseover=function(){
	clearInterval(dong);
}
cont.onmouseout=cd;

/*底部大轮播*/
var lister=document.getElementById('lister');
var prever=document.getElementById('prever');
var nexter=document.getElementById('nexter');
var conter=document.getElementById('conter');
function animate(offset){
	var newleft=parseInt(lister.style.left)+offset
	if(newleft<-4400){
		newleft=-1100;
	}
	if(newleft>-1100){
		newleft=-4400;
	}
	lister.style.left=newleft+'px';
}
nexter.onclick=function(){
	animate(-1100);
}
prever.onclick=function(){
	animate(1100);
}
function paoer(){
	runer=setInterval(function(){
		nexter.onclick();
	},1000);
}
paoer();
conter.onmouseover=function(){
	clearInterval(runer);
}
conter.onmouseout=paoer;


/*scroll固定定位切换*/

	var gu=document.getElementById('gu');
	
	
	window.onscroll=function(){

		var y=document.documentElement.scrollTop||window.pageYOffset;
		
		console.log(y);
		
		if(y>=666){
			gu.style.display='block';
			gu.style.position='fixed';
			gu.style.top=0+'px';
			gu.style.left=205+'px';
		}else if(y<666){
			gu.style.display='none';
		}
	};

/*左侧导航*/
$(function(){
		$(function(){
		
		$('.menu li').mouseenter(function(){
			$(this).children('.chu').stop().hide();
			$(this).children('.chu').slideDown(100);
		});
		
	
		$('.menu li').mouseleave(function(){
			$(this).children('.chu').slideUp();
		});
		
	})
})