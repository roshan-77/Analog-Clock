var hrsElem = document.querySelector(".hrs")
var minElem = document.querySelector(".min")
var secElem = document.querySelector(".sec")

setInterval(() => {
    clockRunning()
}, 1000);

function clockRunning(){
    var date = new Date()
    var hours = date.getHours()
    var minutes = date.getMinutes()
    var seconds = date.getSeconds()
    
    hours = hours>12?hours-12:hours;
    
    hrsElem.style.transform = `rotate(${hours*30}deg)`
    minElem.style.transform = `rotate(${(minutes)*6}deg)`
    secElem.style.transform = `rotate(${seconds*6}deg)`
    
}


