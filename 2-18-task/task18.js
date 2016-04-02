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
    leftIn.addEventListener('click',function(){
        addLeftElement(leftIn);
    }),
        rightIn.addEventListener('click', function () {
            addRightElement(rightIn);
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

}

//输入数据
function inputData(){
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
//添加元素
function addElement(){
    var value = inputData();
    if(value === 0){
        return;
    }
    else {
        var oSpan = document.createElement('span');
        oSpan.className = 'spans';
        oSpan.style.height = value+'px';
        oSpan.style.backgroundColor = generateColors();
    }
    return oSpan;
}

function addLeftElement(){
    var oDiv = $('wrap');
    var oSpan = addElement();
    oDiv.insertBefore(oSpan,oDiv.firstChild);

}

function addRightElement(){
    var oDiv = $('wrap');
    var oSpan = addElement();
    oDiv.appendChild(oSpan);
}

function generateColors(){
    var colors=['#b1b9ff','#ffddf0','#b5a1ff','#9da6bd','#32a39d'];
    var random = Math.floor(Math.random()*4);
    return colors[random];
}