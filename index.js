var Btnright=document.querySelector(".header__slides__list__btn--right");
var Btnleft=document.querySelector(".header__slides__list__btn--left");
var x=0;
var slides=document.querySelector(".header__slides__list");
var desc=document.querySelectorAll(".header__slides__list__item-desc");
function turnLeft(){   
    if(x==0)
        x=3;
    slides.style.transform = `translateX(${-100/3*(x-1)}%)`;
    desc[x-1].animate(
    [{
        transform: 'scaleY(0.85)',  
        opacity:'0',
    }
    ,{
        transform: 'scaleY(1)',
        opacity:'1' ,
    }]
    ,
    {
    duration: 1000,
    });
    x--;
}
function turnRight(){
    if(x==2){
        x=-1;
    }
    slides.style.transform=`translateX(${(-100/3*(x+1))}%)`;
    desc[x+1].animate(
        [{
            transform: 'scaleY(0.85)',  
            opacity: '0'   
        }
        ,{
            transform: 'scaleY(1)',
            opacity: '1'
        }]
        ,
        {
        duration: 1000,
        });
    x++;
}
// setInterval(turnRight,5000);
Btnright.addEventListener("click",turnRight);
Btnleft.addEventListener("click",turnLeft);