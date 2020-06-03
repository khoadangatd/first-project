var Btnright=document.querySelector(".header__slides__list__btn--right");
var Btnleft=document.querySelector(".header__slides__list__btn--left");
var x=1;
var slides=document.querySelector(".header__slides__list");
var desc=document.querySelectorAll(".header__slides__list__item-desc");
var width=slides.firstElementChild.clientWidth;
function turnLeft(){   
    slides.style.transition="all 0.5s";
    x--;
    slides.style.transform=`translateX(${-width*x}px)`;
}
function turnRight(){
    slides.style.transition="all 0.5s";
    x++;
    slides.style.transform=`translateX(${-width*x}px)`;
}
slides.addEventListener("transitionend",function(){
    console.log(x);
    if(x==0)
    {
    
        slides.style.transition='none';
        x=slides.children.length-2;
        slides.style.transform=`translateX(${-width*x}px)`;
    }
    
    if(x==4)
    {
        slides.style.transition='none';
        x=1;
        slides.style.transform=`translateX(${-width*x}px)`;
    }
    console.log(x);
})
setInterval(turnRight,5000);
Btnright.addEventListener("click",turnRight);
Btnleft.addEventListener("click",turnLeft);