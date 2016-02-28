$(function(){
	var gotruepicker = "";/*定时器*/
	var speedpicker = 500;/*定时器的起始速度*/
	console.log("----内部的speedpicker="+speedpicker);
	init();/*初始化信息*/


	function init(){
		console.log("%cdemo初始化","color:red;");
		$(window).scroll(function(event) {
			var nowtop = $(window).scrollTop();
			var windowheight = $(window).height();
			if(nowtop > windowheight){
				$("#gotop").show();
			}else{
				$("#gotop").hide();
			}
		});
		$("#jiugong .jiugongbtn").on("click",function(){
			var img = $("#jiugong .jiugongbtn img");
			if(img.attr("src").indexOf("kaishi") > -1){
				goTurn(true);
				console.log(speedpicker);
				img.attr("src","../img/iconfont-zanting.png");
				img.css({
					"opacity": '0',
					"cursor": 'auto'
				});
			}else{
				console.log(speedpicker);
				if(speedpicker <= 100){
					goTurn(false);
					img.attr("src","../img/iconfont-kaishi.png");
				}
			}
		})
		/*图片轮转列表*/
		pictruelist();
	}

	/*九宫格转盘 #jiugong*/
	function goTurn(flag){
		if(flag){
			if(speedpicker <= 100){
				$("#jiugong .jiugongbtn img").css({
					"opacity": '1',
					"cursor": 'pointer'
				});
			}
			speedpicker = Math.abs(speedpicker - 45 || 100);
			gotruepicker = setInterval(function(){
				var num = $("#jiugong .mengceng").data("num");
				$("#jiugong .mengceng").removeClass('mengceng');
				$("#jiugong li[data-num="+getturnarr(num)+"]").addClass('mengceng');
				$("#jiugong .result img").attr("src",$("#jiugong .mengceng img").attr("src"));
				clearInterval(gotruepicker);
				goTurn(true);
			},speedpicker);
		}else{
			speedpicker = Math.abs(speedpicker + 45 || 100);
			if(speedpicker > 550){
				speedpicker = 500;
				clearInterval(gotruepicker);
			}else{
				clearInterval(gotruepicker);
				gotruepicker = setInterval(function(){
					var num = $("#jiugong .mengceng").data("num");
					$("#jiugong .mengceng").removeClass('mengceng');
					$("#jiugong li[data-num="+getturnarr(num)+"]").addClass('mengceng');
					$("#jiugong .result img").attr("src",$("#jiugong .mengceng img").attr("src"));
					clearInterval(gotruepicker);
					goTurn(false);
				},speedpicker);
			}
		}
	}
	function getturnarr(num){
		var arr = [1,2,3,6,9,8,7,4];
		var index = arr.indexOf(num);
		if(index == arr.length-1){
			return arr[0];
		}else{
			return arr[index+1];
		}
	}
	/*图片轮转列表*/
	function pictruelist(){
		/*轮转图片列表初始化*/
		var imgbox = document.getElementById("imgbox");
		var imglist = imgbox.getElementsByTagName("ul")[0]; 
		var picnum = imglist.getElementsByTagName("li").length;
		console.log(picnum);
		imglist.innerHTML = imglist.innerHTML + imglist.innerHTML;
		var getRoll = function(){
			var imglistlastpic = imglist.getElementsByTagName("li")[picnum];
			if(imgbox.scrollLeft == imglistlastpic.offsetLeft){
				imgbox.scrollLeft = 0;
			}else{
				imgbox.scrollLeft++;
			}
		}
		var timepicker = setInterval(getRoll,20);
		imgbox.onmouseover = function(){
			clearInterval(timepicker);
		}
		imgbox.onmouseout = function(){
			timepicker = setInterval(getRoll,20);
		}
	}
})