const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");

const items = document.querySelectorAll(".deadline-format h4");


let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
//current time and add 10 days
let futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

console.log(futureDate);


//get the year
const year = futureDate.getFullYear();

const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();



let month = futureDate.getMonth();
month = months[month];

//console.log(date);

const weekday = weekdays[futureDate.getDay()];

const date = futureDate.getDate();



giveaway.textContent= `giveaway ends on ${weekday}, ${date}, ${month}, ${year} ${hours}:${minutes}am`;

//future time in ms
const futureTime = futureDate.getTime();
//console.log(futureTime);

function getRemainingTime() {
    const today = new Date().getTime();
//    console.log(today);
    
    const t = futureTime - today;
    console.log(t);
    //1s = 100ms
    //1m = 60s
   // 1hr = 60 min
    //1d = 24hr
    
    //value in ms 
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60* 60 * 1000;
    const oneMinute = 60 * 1000;
    
    //calculate 
    
    let days = t/ oneDay;
//    console.log(days);
    
    days = Math.floor(days);
    
    let hours = Math.floor((t % oneDay) / oneHour); 
//    console.log(8 % 3);
    
    
    let minutes = Math.floor((t % oneHour) / oneMinute);
                             
    let seconds = Math.floor((t % oneMinute) / 1000);
     
    //set values array;
    
    const values = [days,hours,minutes, seconds];
    
    
    function format(item) {
        if(item < 10) {
            return (item = `0${item}`);
        }
        
        return item;
    }
    
    items.forEach(function (item, index) {
        item.innerHTML = format(values[index]);
    });
    
    if(t < 0) {
        clearInterval(countdown);
//        deadline.innerHTML = `<h4>This giveaway has expired</h4>`
        deadline.innerHTML = `<h4>Giveaway has expired!</h4>`;
    }
                             
}

//countdown
//getting a value
//need to have access to the countdown
let countdown = setInterval(getRemainingTime, 1000);
console.log(countdown);

getRemainingTime();


