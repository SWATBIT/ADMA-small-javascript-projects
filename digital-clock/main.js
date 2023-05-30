const hourElement = document.getElementById("hour"); 
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const ampmElement = document.getElementById("am_pm");


function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if(h>12){
        h= h - 12;
        ampm ="PM";
    }

    // Make sure h,m,s are having double digit format
    h = h<10 ? "0" + h : h;
    m = m<10 ? "0" + m : m;
    s = s<10 ? "0" + s : s;

    hourElement.innerText = h;
    minutesElement.innerText = m;
    secondsElement.innerText = s;
    ampmElement.innerText = ampm;

    // calling this function every second
    // every one second we will call this function
    // 1000 means after one second it will call the updateClock function once again, creating a infinite loop
    setTimeout(()=>{
        updateClock();
    }, 1000)
}

updateClock();