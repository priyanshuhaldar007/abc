var cactii=document.querySelector('#cactii');
var dino=document.querySelector('#dino');

window.addEventListener('load',()=>{

cactii.classList.add('animate1');


});
function  dead(){
    if(alert("You are out \nYour points are:"+point)){}
            else    window.location.reload(); 
            point=0;
            cactii.classList.remove('animate');
            cactii.style.display="none";
}

window.addEventListener('keydown',function(){
    dino.classList.add('jump');
    document.querySelector('#smoke').style.display="none";
    setTimeout(() => {
        dino.classList.remove('jump');
        document.querySelector('#smoke').style.display="block";
    }, 800);
});
var point = 0;
function checkdead(){
    var cactiival=parseInt(window.getComputedStyle(cactii).getPropertyValue("left"));
    var dinoval=parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));
    if(cactiival>=50 && cactiival<=80){
        if(dinoval<=-90){          
            dead(); 
        }
    }

}
setInterval(function(){
    document.querySelector('.score').innerHTML="Score: "+point;
    point++;

    if(point>207){
        cactii.classList.add('animate2');
    }
    if(point>1000){
        cactii.classList.add('animate3');
    }
},50);
setInterval(checkdead,10);

