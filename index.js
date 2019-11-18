var slider = document.querySelector(".slider");
var count = 0;

function slide(){
    if(count==2){
        count=0;
    }
    else{
        count++;
    }
    
    slider.style.left=1200*(-count)+"px";
}

window.setInterval("slide()",2000);