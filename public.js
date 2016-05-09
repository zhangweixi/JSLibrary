
//检查是否为空
function empty(string)
{
	if(string.length<1||string==0|| string == '')
	return true;
	else
	return false;
}


//ajax请求
function http(url,data)
{
	var type="post";
	var returnData;
	if(arguments.length<2)
		{alert("参数错误");return false;}
	if(arguments.length==3)
	type = arguments[2];
	var sendData = '';
	for( var i in data)
	{
		sendData +=(i+"="+data[i]+"&");
	}
	sendData =sendData.substring(0,sendData.length-1);
	 $.ajax({
	 	url:url,
	 	type:'post',
	 	async:false,
	 	data:sendData,
	 	success:function(data){returnData=data},
	 	error:function(){returnData=false;}
	 });
	 return returnData;
}

function httpj(url,data)
{
	var type="post";
	var returnData;
	if(arguments.length<2)
		{alert("参数错误");return false;}
	if(arguments.length==3)
	type = arguments[2];
	var sendData = '';
	for( var i in data)
	{
		sendData +=(i+"="+data[i]+"&");
	}
	sendData =sendData.substring(0,sendData.length-1);
	 $.ajax({
	 	url:url,
	 	type:'post',
	 	async:false,
	 	data:sendData,
	 	success:function(data){returnData=data},
	 	error:function(){returnData=false;}
	 });


	 //returnData = eval("("+returnData+")");
	 return returnData;
}


//ajax请求异步请求
function httpnoasync(url,data)
{
	var type="post";
	var returnData;
	if(arguments.length<2)
		{alert("参数错误");return false;}
	// if(arguments.length==3)
	// type = arguments[2];
	var sendData = '';
	for( var i in data)
	{
		sendData +=(i+"="+data[i]+"&");
	}
	sendData =sendData.substring(0,sendData.length-1);
	 $.ajax({
	 	url:url,
	 	type:'post',
	 	data:sendData,
	 	success:function(data){returnData=data},
	 	error:function(){returnData=false;}
	 });

	//return returnData;
}



   
	//防止事件冒泡
	function stopPropagation(e) {
		e = e || window.event;
		if(e.stopPropagation) { //W3C阻止冒泡方法
			e.stopPropagation();
		} else {
			e.cancelBubble = true; //IE阻止冒泡方法
		}
	}


	function log(msg){
		console.log(msg);
	}


	//检查某个字符串中是否有某个数组中的一个值 并返回下标
	function checkStringHaveArrayKey(arr,str){
		for(var i=0;i<arr.length;i++){
			var pattern = new RegExp(arr[i]);
				if(pattern.test(str)){
					return i;
				}
		}
		return false;
	}




//将某个元素居于屏幕中间
function setPositionMiddle(ele){
	var windowHeight = parseInt($(window).height());
	var windowWidth	 = parseInt($(window).width());
	var eleHeight 	 = parseInt($(ele).css('height'));
	var eleWidth 	 = parseInt($(ele).css('width'));

	var top 		 = ((windowHeight-eleHeight)/2)+"px";
	var left 		 = ((windowWidth-eleWidth)/2)+"px";
		
		$(ele).css({"top":top,"left":left,"position":"absolute"});
}


function showdebug(info){
	var bugBox = $('#debugbox');

	if(bugBox.length>0){
		bugBox.html(info);
	}else{
		var box = "<div id='debugbox'  style='background:#000;color:#fff;position:fixed;top:0;left:0;width:100%;'>"+info+"</div>";
		$(box).appendTo('body');
	}


}

