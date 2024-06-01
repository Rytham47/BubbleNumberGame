var timer = 60;
var score =0;
var hitrn ;

function makeBubble(){ 
    var clutter = "";

for(var i= 1 ; i<=80 ; i++)
         
    {
        var rn = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){
    
   var timeint = setInterval(function(){
    if(timer > 0){
         timer--;
         document.querySelector("#Timer").textContent = timer;
        }
        else{
            clearInterval(timeint);
            document.querySelector("#pbtm").innerHTML = `<h1> GAME OVER </h1>`;
        }
},1000)
    }

function getNewHit(){
 hitrn = Math.floor(Math.random()*10)
 document.querySelector("#hitin").textContent = hitrn; 
}

function incScore(){

    score += 10;
    document.querySelector("#scr").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click",function (detail) {
    // var a = Number(detail.target);
    var a = Number(detail.target.textContent);
     if (a === hitrn) {
         incScore();
         getNewHit();
         makeBubble();
     }
});


makeBubble();
runTimer();
getNewHit();
