var ROOTPATH = "http://chentingjun.github.io/MyWebsite/";/*根目录*/

var HTMLPATH = ROOTPATH + "html/";/*html目录*/

init();


function init(){
	console.log("初始化页面属性! PC==>"+isPc());
}

/*跳转页面*/
function gotoPage(page){
	if(isEmpty(page)){
		return location.href = HTMLPATH + "404.html";
	}
	switch(page){
		case "pc": location.href = HTMLPATH + "pc.html"; break;
		case "mobile": location.href = HTMLPATH + "mobile.html"; break;
		case "demo": location.href = HTMLPATH + "demo.html"; break;
		default: location.href = HTMLPATH + page + ".html";break;
	}
}

/*判空处理*/
function isEmpty(string) {
    if (typeof string === 'string') {
    	/*string = string.trim();去掉首尾空格的方法*/
        string = string.replace(/(^\s*)|(\s*$)/g, "");/*正则去掉首尾--------'\s'==>匹配空格*/
        if (string == '' || string == null || string == undefined || string.length == 0) {
            return true;
        } else {
            return false;
        }
    } else if (typeof string === 'object') {
        return $.isEmptyObject(string);
    }
}

/*判断是否是PC客户端*/
function isPc(){    
	var userAgentInfo = navigator.userAgent;  
	var Agents = new Array("Android", "iPhone", "Windows Phone", "iPad", "iPod");    
	var flag = true;    
	for (var v = 0; v < Agents.length; v++) {    
		if (userAgentInfo.indexOf(Agents[v]) > -1) {
			flag = false; 
			break; 
		}    
	}    
	return flag;    
  }  