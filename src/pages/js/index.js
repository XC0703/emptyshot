//导入本地数据
// 深拷贝函数
// 类型判断
function judgeType (data) {
	return Object.prototype.toString.call(data).slice(8, -1)
}
// 递归实现深拷贝
function deepCopy (param) {
	let np = judgeType(param) === 'Array'? []:{}
	for (let i in param) {
		if (['Array','Object'].includes(judgeType(param[i]))) {
			np[i] = deepCopy(param[i])
		} else {
			// 包括函数，也在此直接赋值
			np[i] = param[i]
		}
	}
	return np
}
// 使用封装的深拷贝读取json数据
let movieData;
$.ajaxSetup({async:false});//将getJson函数的执行方式改为同步执行，即可对外面的变量进行赋值操作
$.getJSON('../pages/data/movie.json',data=>{
    movieData=deepCopy(data);
})
$.ajaxSetup({async:true});//将执行方式改回异步执行即可



// 全局对象--左边select的值、右边select的值、下方电影属性的值(根据url获得)
let select_left = "";
let select_right = "";
let select_info = decodeURI(document.URL).slice(decodeURI(document.URL).indexOf("=")+1);



// 使用select2.js
$(document).ready(function() {
    $('.singleSelect').select2({
        placeholder: '---请选择电影---',
        data:movieData,
		allowClear: true
    });
});
// 监听下拉选择框的改变,并执行回调
$('.select1').change(()=>{
	// 获取左边select的值
	select_left = {
		id:$(".select1 option:selected").val(),
		text:$(".select1 option:selected").text()
	}
	// const dom_left_map = document.querySelector(".bot_leftbox .chart_box .map");
	const dom_left = document.querySelector(".bot_leftbox .chart_box .chart img");
	if(select_left.id){
		// dom_left_map.style.opacity = 0;
		dom_left.src = decodeURI('./images/movie_imgs/'+select_info+'/'+select_left.id+'_'+select_left.text+'.png');
	}
	else{
		dom_left.src = '';
		// dom_left_map.style.opacity = 1;
	}
	// console.log(select_left,select_right,select_info)
});
$('.select2').change(()=>{
	// 获取左边select的值
	select_right = {
		id:$(".select2 option:selected").val(),
		text:$(".select2 option:selected").text()
	}
	// const dom_right_map = document.querySelector(".bot_rightbox .chart_box .map");
	const dom_right = document.querySelector(".bot_rightbox .chart_box .chart img");
	if(select_right.id){
		// dom_right_map.style.opacity = 0;
		dom_right.src = decodeURI('./images/movie_imgs/'+select_info+'/'+select_right.id+'_'+select_right.text+'.png');
	}
	else{
		dom_right.src = '';
		// dom_right_map.style.opacity = 1;
	}
	// console.log(select_left,select_right,select_info)
});