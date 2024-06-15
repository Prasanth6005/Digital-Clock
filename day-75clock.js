document.getElementById("time").innerText=new Date().toLocaleTimeString();

let myTime =setInterval(function(){
    document.getElementById("time").innerText=new Date().toLocaleTimeString();

},1000);

function start(){
    alert("hello jack your correct time is now");
    myTime =setInterval(function(){
        document.getElementById("time").innerText=new Date().toLocaleTimeString();
    
    },1000);
}

function stop(){
    clearInterval(myTime);
}

