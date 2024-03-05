var hrsElem = document.querySelector(".hrs")
var minElem = document.querySelector(".min")
var secElem = document.querySelector(".sec")
var digitalClock = document.querySelector(".digital-clock")


setInterval(() => {
    clockRunning()
}, 1000);

function clockRunning(){
    var date = new Date()
    var hours = date.getHours()
    var minutes = date.getMinutes()
    var seconds = date.getSeconds()
    
    var am_or_pm = hours>11?"PM":"AM";
    hours = hours>12?hours-12:hours;
    seconds = seconds<10?`0${seconds}`:seconds;

    hrsElem.style.transform = `rotate(${hours*30}deg)`
    minElem.style.transform = `rotate(${(minutes)*6}deg)`
    secElem.style.transform = `rotate(${seconds*6}deg)`
    digitalClock.textContent = `${hours}:${minutes}:${seconds} ${am_or_pm}`;
    
}


