/**
 * Created by gothclaudia on 16-4-1.
 */

window.onload = function(){
    $ = function(id){
        return document.getElementById(id);
    };
    var oDiv = $('wrap');
    var leftIn = $('leftIn');
    var rightIn = $('rightIn');
    var leftOut = $('leftOut');
    var rightOut = $('rightOut');
    var checkData = $('checkData');

    leftIn.addEventListener('click',function(){
        addLeftElement();
    });

    rightIn.addEventListener('click', function () {
        addRightElement();
    });

    leftOut.addEventListener('click',function(){
        for(var i=0; i<oDiv.childNodes.length; i++){
            if(oDiv.childNodes[i].nodeType === 1){
                alert(oDiv.childNodes[i]);
                oDiv.removeChild(oDiv.childNodes[i]);
                break;
            }
        }
    });
    rightOut.addEventListener('click',function(){
        for(var i=oDiv.childNodes.length-1; i>0; i--){
            if(oDiv.childNodes[i].nodeType === 1){
                alert(oDiv.childNodes[i]);
                oDiv.removeChild(oDiv.childNodes[i]);
                break;
            }
        }
    });

    checkData.addEventListener('click',function(){
        selectData();
    });

    //点击元素删除 使用闭包
    function　delElement(){
        for(var i=0; i<oDiv.childNodes.length; i++) {
            oDiv.childNodes[i].addEventListener('click',function (i){
                return function (){
                    oDiv.removeChild(this);
                }
            }(i));
        }
    }
    delElement();
}

//输入数据
function inputData(){
    var str = [];
    var value = $('value').value.trim();
    if(!value){
        alert('输入不能为空');
        return 0;
    }
    else {
        str = value.split(/[\n\r\t\s,，、;；]+/g);
        return str;
    }
}
//左入数据
function addLeftElement(){
    var oDiv = $('wrap');
    var value = inputData();
    var text = $('value');
    if(value === 0){
        return;
    }
    else {
        for(var i=0; i<value.length; i++){
            var oSpan = document.createElement('span');
            oSpan.className = 'spans';
            oSpan.innerHTML = value[i];
            oDiv.insertBefore(oSpan,oDiv.firstChild);
            text.value=null;
        }
    }
}
//右入数据
function addRightElement(){
    var oDiv = $('wrap');
    var value = inputData();
    var text = $('value');
    if(value === 0){
        return;
    }
    else {
        for(var i=0; i<value.length; i++){
            var oSpan = document.createElement('span');
            oSpan.className = 'spans';
            oSpan.innerHTML = value[i];
            oDiv.appendChild(oSpan);
            text.value=null;
        }
    }

}
//匹配数据
function selectData(){
    var spans = document.getElementsByTagName('span');
    for(var i=0; i<spans.length; i++){
        var data = $('data').value.toLowerCase();
        var value = spans[i].innerHTML.toLowerCase();
        if(value.search(data)!=-1){
            spans[i].style.backgroundColor='#2e78bb';
            spans[i].style.color='antiquewhite';
        }
    }
}
/**
 * Created by gothclaudia on 16-4-3.
 */
