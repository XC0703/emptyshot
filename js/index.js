let infoList = document.querySelectorAll('.contrastBtn');
const megs = ['empty_shot','color_motion','red_image'];
for(let i = 0;i<infoList.length;i++){
    if(i==0){
        infoList[i].addEventListener("click",function(){
            //路径+参数名+参数值  使用encodeURI进行编码，可以传中文
            window.open(encodeURI('./src/pages/empty_shot/compare.html?'+'message='+megs[i]))
        })
    }else{
        infoList[i].addEventListener("click",function(){
            //路径+参数名+参数值  使用encodeURI进行编码，可以传中文
            window.open(encodeURI('./src/pages/color_motion/compare.html?'+'message='+megs[i]))
        })
    }
}

