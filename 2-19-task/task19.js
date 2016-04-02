/**
 * Created by gothclaudia on 16-4-1.
 */

window.onload = function(){
     $ = function(id){
        return document.getElementById(id);
    }
    var oDiv = $('wrap');
    var leftIn = $('leftIn');
    var rightIn = $('rightIn');
    var leftOut = $('leftOut');
    var rightOut = $('rightOut');
    var random = $('random');
    var sort = $('sort');
    var clear = $('clear');
    leftIn.addEventListener('click',function(){
        addLeftElement();
    }),
    rightIn.addEventListener('click', function () {
            addRightElement();
        }),
    leftOut.addEventListener('click',function(){
            for(var i=0; i<oDiv.childNodes.length; i++){
                if(oDiv.childNodes[i].nodeType === 1){
                    alert(oDiv.childNodes[i]);
                    oDiv.removeChild(oDiv.childNodes[i]);
                    break;
                }
            }
        }),
    rightOut.addEventListener('click',function(){
            for(var i=oDiv.childNodes.length-1; i>0; i--){
                if(oDiv.childNodes[i].nodeType === 1){
                    alert(oDiv.childNodes[i]);
                    oDiv.removeChild(oDiv.childNodes[i]);
                    break;
                }
            }
        })
    random.addEventListener('click',function(){
        generateRandom();
    })
    sort.addEventListener('click',function(){
        sortData();
    })
    clear.addEventListener('click',function(){
        oDiv.innerHTML='';
    })
}

//输入数据
function inputData(){
    var quality = document.getElementsByTagName('span');
    if(quality.length>60){
        alert('最大个数为60');
    }
    else {
        var value = $('value').value.trim();
        if(value ==''){
            alert('输入不能为空');
            return 0;
        }
        else if( value>100 || value<10){
            alert('输入值为10-100之间');
            return 0;
        }
        else {
            return value;
        }
    }
}
//添加元素
function addElement(){
    var value = inputData();
    if(value === 0){
        return;
    }
    else {
        var oSpan = document.createElement('span');
        oSpan.className = 'spans';
        oSpan.style.height = Math.floor(value*1.7)+'px';
        oSpan.innerHTML = Math.floor(value*1.7);
        oSpan.style.backgroundColor = generateColors();
    }
    return oSpan;
}
//左入数据
function addLeftElement(){
    var oDiv = $('wrap');
    var oSpan = addElement();
    oDiv.insertBefore(oSpan,oDiv.firstChild);

}
//右入数据
function addRightElement(){
    var oDiv = $('wrap');
    var oSpan = addElement();
    oDiv.appendChild(oSpan);
}
//随机生成５０个竖条
function generateRandom(){
    var wrap = $('wrap');
    var value=0;
    for(var i =0; i<50; i++){
        var oSpan = document.createElement('span');
        oSpan.className = 'spans';
        value = Math.floor(Math.random()*170);
        if(value<17){
            i--;
        }
        else {
            oSpan.style.height = value+'px';
            oSpan.innerHTML= value;
            oSpan.style.backgroundColor = generateColors();
            wrap.appendChild(oSpan);
        }
    }
}
//生成随机颜色
function generateColors(){
    var colors=['#b1b9ff','#ffddf0','#b5a1ff','#9da6bd','#32a39d'];
    var random = Math.floor(Math.random()*4);
    return colors[random];
}
//排序
function sortData(){
    var oSpans = document.getElementsByTagName('span');
        var i = 0,j = 1,temp,value;
        var len = oSpans.length;
        var timer = null;
        timer = setInterval(run,15);
        function run() {
            if (i < len) {
                if (j < len) {

                    if (oSpans[i].offsetHeight > oSpans[j].offsetHeight) {
                        temp = oSpans[i].offsetHeight;
                        value = oSpans[i].innerHTML;
                        oSpans[i].innerHTML = oSpans[j].innerHTML;
                        oSpans[j].innerHTML=value;
                        oSpans[i].style.height = oSpans[j].offsetHeight+'px';
                        oSpans[j].style.height = temp+'px';
                    }
                    j++;
                } else {
                    i++;
                    j = i + 1;
                }
            } else {
                clearInterval(timer);
                return;
            }
        }
}
