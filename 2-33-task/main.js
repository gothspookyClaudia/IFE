/**
 * Created by gothclaudia on 16-4-16.
 */
    $ = function (ele) {
        return document.getElementById(ele);
    }
    function object(x,y){
        this.row = x;
        this.col = y;
        this.angle = 0;
        this.element = document.getElementsByTagName('td').item(x*11+y);
    }
    //显示方块
    object.prototype.appearObject = function (count) {
        var innerDiv = document.createElement('div');
        innerDiv.setAttribute("class","activeObj");
        innerDiv.style.transform = "rotate(-"+count*90+"deg)";
        this.angle = -count*90;
        this.element.appendChild(innerDiv);
    }
    //使方块消失
    object.prototype.disappearObject = function(){
        this.element.removeChild(this.element.firstChild);
    }
    //方块逆时针转动
    object.prototype.rotate = function(num){
        this.angle = this.angle + num;
        var str = "rotate("+this.angle+"deg)"
        this.element.firstChild.style.transform = str;
    }

    //创建活动方块
    function moveObject(x,y){
        this.row = x;
        this.col = y;
        //this.direction=["up","left","down","right"];
        this.directionNum = 0;
    }

    moveObject.prototype.createObject = function () {
        squre[this.row][this.col].appearObject(0);
    }

    moveObject.prototype.move = function (count) {
        switch (count) {
            case 'go':
                switch (this.directionNum) {
                    //up
                    case 0:
                        if(this.row == 1) { break; }
                        squre[this.row][this.col].disappearObject();
                        this.row--;
                        squre[this.row][this.col].appearObject(this.directionNum);
                        break;
                    //left
                    case 1:
                        if(this.col == 1){ break;}
                        squre[this.row][this.col].disappearObject();
                        this.col--;
                        squre[this.row][this.col].appearObject(this.directionNum);
                        break;
                    //down
                    case 2:
                        if(this.row == 10){ break;}
                            squre[this.row][this.col].disappearObject();
                            this.row++;
                            squre[this.row][this.col].appearObject(this.directionNum);
                            break;
                    //right
                    case 3:
                        if(this.col == 10){ break;}
                            squre[this.row][this.col].disappearObject();
                            this.col++;
                            squre[this.row][this.col].appearObject(this.directionNum);
                            break;
                }
                break;
            case 'tun lef':
                squre[this.row][this.col].rotate(-90);
                this.directionNum = (this.directionNum+1)%4;
                break;
            case 'tun rig':
                squre[this.row][this.col].rotate(90);
                this.directionNum = (this.directionNum+3)%4;
                break;
            case 'tun bac':
                squre[this.row][this.col].rotate(180);
                this.directionNum = (this.directionNum+2)%4;
                break;
        }

    }

    var squre = [];
    //初始化存储表格的对象
    for(var i=0; i<11; i++){
        squre[i]=[];
        for(var j=0; j<11; j++){
            squre[i][j] = new object(i,j);
        }
    }

    var moveobject = new moveObject(5,5);
    moveobject.createObject();
    var execution = $('execute');
    var go = $('go');
    var left = $('left');
    var right = $('right');
    var back = $('back');
    var text = $('text');
    go.addEventListener('click',function(){
        moveobject.move(go.value.trim().toLowerCase());
    });
    left.addEventListener('click',function() {
        moveobject.move(left.value.trim().toLowerCase());
    });
    right.addEventListener('click',function(){
        moveobject.move(right.value.trim().toLowerCase());
    });
    back.addEventListener('click',function(){
        moveobject.move(back.value.trim().toLowerCase());
    });
    execution.addEventListener('click',function(){
       /* switch (text.trim().toLowerCase()){
            case 'go':
                moveobject.move('go');
                break;
            case 'tun lef':
                moveobject.move('tun lef');
                break;
            case 'tun right':
                moveobject.move('tun rig');
                break;
            case 'tun bac':
                moveobject.move('tun bac');
                break;
        }*/
        var value1 = text.value.trim();
        var value =value1.toLowerCase();
        if(value == 'go'){
            moveobject.move('go');
        }
        else if(value == 'tun lef'){
            moveobject.move('tun lef');
        }
        else  if(value == 'tun rig'){
            moveobject.move('tun rig');
        }
        else if(value == 'tun bac') {
            moveobject.move('tun bac');
        }
        else {
            alert("GO：向蓝色边所面向的方向前进一格\rTUN LEF：向左转\rTUN RIG：向右转\rTUN BAC：向右转");
        }
    })