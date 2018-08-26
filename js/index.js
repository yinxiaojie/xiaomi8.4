window.onload=function () {
    let sort_right2 = document.getElementsByClassName("sort_right2")[0];
    let shopBox = document.getElementsByClassName("shopBox")[0];
    sort_right2.onmouseenter = function () {
        shopBox.style.height = "98px";
        shopBox.style.boxShadow = "0 2px 3px 1px rgba(0,0,0,0.2)";
    };
    sort_right2.onmouseleave = function () {
        shopBox.style.height = "0";
        shopBox.style.boxShadow = "none";
    };

    let btn = document.querySelector(".botton");
    let btnLi = btn.querySelectorAll(".botton li");
    let asideBox = document.querySelectorAll(".asideBox");
    console.log(btnLi, btn, asideBox);
    for (let i = 0; i < btnLi.length; i++) {
        btnLi[i].onmouseenter = function () {
            asideBox[i].style.display = "block";
        };
        btnLi[i].onmouseleave = function () {
            asideBox[i].style.display = "none";
        }
    }

    // 家电选项卡
    // let house=document.getElementsByClassName("house")[0];
    // let topRight=house.getElementsByClassName("top-right")[0];
    // let lists=topRight.getElementsByTagName("li");
    // let jiadianBox=document.getElementsByClassName("jiadianBox");
    // // console.log(jiadianBox, lists,);
    // for(let i=0;i<lists.length;i++){
    //     lists[i].onmouseenter=function () {
    //         for(let j=0;j<lists.length;j++){
    //             jiadianBox[j].style.zIndex="5";
    //         }
    //         jiadianBox[i].style.zIndex="10";
    //
    //     };
    // };
    //家电选项卡
    let topRight = document.querySelectorAll(".top-right");
    let lists = document.querySelectorAll(".top-right li");
    let content = document.querySelectorAll(".content");
    // let contentBox=document.querySelectorAll(".content-box");
    console.log(content);
    for (let i = 0; i < lists.length; i++) {
        lists[i].onmouseenter = function () {
            for (let j = 0; j < lists.length; j++) {
                content[j].style.zIndex = "5";
            }
            content[i].style.zIndex = "10";
        }
    }


    ///////////轮播图////////////////////
    let banner = document.getElementsByClassName("banner")[0];
    let picture = document.getElementsByClassName("picture");
    let circle = document.getElementsByClassName("circle")[0];
    let circleLi = circle.getElementsByTagName("li");
    let sildes1 = document.getElementsByClassName("sildes-l")[0];
    let sildes2 = document.getElementsByClassName("sildes-r")[0];
    console.log(circleLi, picture, sildes1, sildes2);
    let t = setInterval(move, 1500);
    let num = 0;

    function move() {
        for (let i = 0; i < picture.length; i++) {
            picture[num].style.zIndex = "5";
            circleLi[i].style.background = "";
        }
        num++;
        if (num > picture.length - 1) {
            num = 0;
        }
        picture[num].style.zIndex = "10";
        circleLi[num].style.background = "#ff6700";
    }

    //鼠标移入 移出
    banner.onmouseenter = function () {
        clearInterval(t);
    };
    banner.onmouseleave = function () {
        t = setInterval(move, 1000);
    };


    function move1() {
        for (let i = 0; i < picture.length; i++) {
            picture[num].style.zIndex = "5";
            circleLi[i].style.background = "";
        }
        num--;
        if (num < 0) {
            num = picture.length - 1;
        }
        picture[num].style.zIndex = "10";
        circleLi[num].style.background = "#ff6700";
    }

    sildes2.onclick = function () {
        move();
    };
    sildes1.onclick = function () {
        move1();
    };


    //点击小圆点
    for (let i = 0; i < circleLi.length; i++) {
        circleLi[i].onclick = function () {
            for (let j = 0; j < circleLi.length; j++) {
                picture[j].style.zIndex = "5";
                circleLi[j].className = "";
                circleLi[num].style.background = "";
            }
            picture[i].style.zIndex = "10";
            circleLi[i].className = "hot1";
            num = i;
            circleLi[num].style.background = "#ff6700";
        }
    }

    //内容轮播图
    let readBox=document.querySelector(".readBox");
    let current1=next1=0;
    Content(readBox,current1,next1);
    let readBox1=document.querySelector(".readBox1");
    let current2=next2=0;
    Content(readBox1,current2,next2);
    let readBox2=document.querySelector(".readBox2");
    let current3=next3=0;
    Content(readBox2,current3,next3);
    let readBox3=document.querySelector(".readBox3");
    let current4=next4=0;
    Content(readBox3,current4,next4);
    function Content(readBoxs,current,next){
        let read=readBoxs.querySelectorAll(".read");
        let read1=readBoxs.querySelector(".read");
        let width=parseInt(getComputedStyle(read1,null).width);
        let wayPoint=readBoxs.querySelector("ul");
        let wayPoint1=wayPoint.querySelectorAll("li");
        let moveLeft=readBoxs.querySelector(".move_left");
        let moveRight=readBoxs.querySelector(".move_right");
        current=next=0;
        let flag=true;
        moveRight.onclick=function(){
            if (!flag){
                return;
            }
            if(next==read.length-1){
                next==read.length-1;
                return;
            }
            flag=false;
            move1();
        }
        moveLeft.onclick=function(){
            if(!flag){
                return;
            }
            if (next==0){
                return;
            }
            flag=false;
            move1L();
        }
        function move1(){
            next++;
            if (next==read.length){
                next=0;
            }
            read[next].style.left=width+"px";
            animate(read[current],{left: -width});
            animate(read[next],{left: 0},function(){
                flag=true;
            });
            wayPoint1[current].classList.remove("onclick");
            wayPoint1[next].classList.add("onclick");
            current=next;
        }
        function move1L(){
            next--;
            if (next<0){
                next=read.length-1;
            }
            read[next].style.left=-width+"px";
            animate(read[current],{left: width});
            animate(read[next],{left: 0},function(){
                flag=true;
            });
            wayPoint1[current].classList.remove("onclick");
            wayPoint1[next].classList.add("onclick");
            current=next;
        }
        wayPoint1.forEach(function(v,i){
            v.onclick=function(){
                wayPoint1.forEach(function(v,i){
                    wayPoint1[current].classList.remove("onclick");
                });
                if (i==current){
                    return;
                } else if (i>current){
                    read[i].style.left=width+"px";
                    animate(read[current],{left: -width});
                    animate(read[i],{left: 0},function(){
                        flag=true;
                    });
                } else{
                    read[i].style.left=-width+"px";
                    animate(read[current],{left: width});
                    animate(read[i],{left: 0},function(){
                        flag=true;
                    });
                }
                wayPoint1[i].classList.add("onclick");
                next=current=i;
            };
        });
    }

};