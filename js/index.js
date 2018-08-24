window.onload=function () {
    let sort_right2=document.getElementsByClassName("sort_right2")[0];
    let shopBox=document.getElementsByClassName("shopBox")[0];
    sort_right2.onmouseenter=function () {
        shopBox.style.height="98px";
        shopBox.style.boxShadow="0 2px 3px 1px rgba(0,0,0,0.2)";
    };
    sort_right2.onmouseleave=function () {
        shopBox.style.height="0";
        shopBox.style.boxShadow="none";
    };

    let btn=document.getElementsByClassName("botton")[0];
    let daohang=btn.getElementsByTagName("li");
    let asideBox=document.getElementsByClassName("asideBox");
    console.log(btn,);

    // for (let i=0;i<lis.length;i++){
    //     lis[i].onmouseenter=function () {
    //         asideBox[i].style.display="block";
    //     };
    //     lis[i].onmouseleave=function () {
    //         asideBox[i].style.display="none";
    //     }
    // }

    //家电选项卡
    let house=document.getElementsByClassName("house")[0];
    let topRight=house.getElementsByClassName("top-right")[0];
    let lists=topRight.getElementsByTagName("li");
    let jiadianBox=document.getElementsByClassName("jiadianBox");
    console.log(jiadianBox, lists,);
    for(let i=0;i<lists.length;i++){
        lists[i].onmouseenter=function () {
            for(let j=0;j<lists.length;j++){
                jiadianBox[j].style.zIndex="5";
            }
            jiadianBox[i].style.zIndex="10";

        };
    };


    ///////////轮播图////////////////////
    let banner =document.getElementsByClassName("banner")[0];
    let picture=document.getElementsByClassName("picture");
    let circle=document.getElementsByClassName("circle")[0];
    let circleLi=circle.getElementsByTagName("li");
    let sildes1=document.getElementsByClassName("sildes-l")[0];
    let sildes2=document.getElementsByClassName("sildes-r")[0];
    console.log(circleLi, picture,sildes1,sildes2);
    let t=setInterval(move,1000);
    let num=0;
    function move() {
        for(let i=0;i<picture.length;i++){
            picture[num].style.zIndex="5";
            circleLi[i].style.background="";
        }
        num++;
        if(num>picture.length-1){
            num=0;
        }
        picture[num].style.zIndex="10";
        circleLi[num].style.background="#ff6700";
    }

    //鼠标移入 移出
    banner.onmouseenter=function () {
        clearInterval(t);
    };
    banner.onmouseleave=function () {
        t=setInterval(move,1000);
    };


    function move1() {
        for(let i=0;i<picture.length;i++){
            picture[num].style.zIndex="5";
            circleLi[i].style.background="";
        }
        num--;
        if(num<0){
            num=picture.length-1;
        }
        picture[num].style.zIndex="10";
        circleLi[num].style.background="#ff6700";
    }
    sildes2.onclick=function () {
        move();
    };
    sildes1.onclick=function () {
        move1();
    };



    //点击小圆点
    for(let i=0;i<circleLi.length;i++){
        circleLi[i].onclick=function () {
            for(let j=0;j<circleLi.length;j++){
                picture[j].style.zIndex="5";
                circleLi[j].className="";
                circleLi[num].style.background="";
            }
            picture[i].style.zIndex="10";
            circleLi[i].className="hot1";
            num=i;
            circleLi[num].style.background="#ff6700";
        }
    }
};
