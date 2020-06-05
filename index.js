var Btnright=document.querySelector(".header__slides__list__btn--right");
var Btnleft=document.querySelector(".header__slides__list__btn--left");
var x=1;
var lastX=0;
var slides=document.querySelector(".header__slides__list");
var desc=document.querySelectorAll(".header__slides__list__item-desc");
var width=slides.firstElementChild.clientWidth;
desc[1].style.animation="hienra 0.5s";
desc[1].style.animationDelay = "0.1s";
desc[1].style.animationFillMode = "forwards";
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
    desc[lastX].style.animation="none";
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
    lastX=x;   
    desc[x].style.animation="hienra 0.5s";
    desc[x].style.animationDelay = "0.1s";
    desc[x].style.animationFillMode = "forwards";
    console.log(x);
})
//setInterval(turnRight,5000);
Btnright.addEventListener("click",turnRight);
Btnleft.addEventListener("click",turnLeft);

// scroll top
var iconFooter = document.querySelector(".footer__bot__icon");
console.log(window);
function iconScrollTop(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}
iconFooter.addEventListener("click",iconScrollTop);