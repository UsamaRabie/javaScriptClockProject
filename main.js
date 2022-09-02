    let clockContainer =document.getElementById("clockContainer");


let clock = () => {

let now = new Date();
let hours = now.getHours(); //returns value 0-23 for the current hour
let minutes =now.getMinutes(); //returns value 0-59 for the current minute of the hour
let seconds = now.getSeconds(); //returns value 0-59 for current second of the minute
let date = now.toDateString(); //returns a string (e.g. "Fri May 9 2020")
let pmam = "PM";

 if(hours<12)
        {
            pmam = "AM";
        }
 if(hours>12)
    {
        hours= hours - 12;
    }
    if(hours==0)
    {
        hours = 12;
    }
    if(minutes<10)
    {
        minutes = `0${minutes}`;
    }

     if(seconds<10)
    {
        seconds = `0${seconds}`;
    }
    
    let content = `<div class="date">${date}</div>
      <div class="clock">${hours} : ${minutes} : ${seconds} ${pmam}</div>`

      clockContainer.innerHTML=content;
}
setInterval(() => {
    clock();
}, 1000);