$(function(){
	init();/*初始化信息*/


	function init(){
		console.log("%cdemo初始化","color:red;");
		var gotruepicker = "";/*定时器*/
		$(window).scroll(function(event) {
			var nowtop = $(window).scrollTop();
			var windowheight = $(window).height();
			if(nowtop > windowheight){
				$("#gotop").show();
			}else{
				$("#gotop").hide();
			}
			/* Act on the event */
		});
		$("#jiugong .jiugongbtn").on("click",function(){
			var img = $("#jiugong .jiugongbtn img");
			if(img.attr("src").indexOf("kaishi") > -1){
				goTurn(true);
				img.attr("src","../img/iconfont-zanting.png");
			}else{
				goTurn(false);
				img.attr("src","../img/iconfont-kaishi.png");
			}
		})
	}
	function goTurn(flag){
		if(flag){
			gotruepicker = setInterval(function(){
				var num = $("#jiugong .mengceng").data("num");
				$("#jiugong .mengceng").removeClass('mengceng');
				$("#jiugong li[data-num="+getturnarr(num)+"]").addClass('mengceng');
			},50);
		}else{
			clearInterval(gotruepicker);
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
})
