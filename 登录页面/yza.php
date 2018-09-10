<?php
	
	$un=$_POST['un'];
	
	
	$arr=["胡美婷","莫桐","王立安","张瑾","杨文欣","董建"];

	if(in_array($un,$arr)){
	
		echo 'y';
		
	}else{	
		
		echo 'n';
	}