
//1.Let's define variables

let userBirthday = new Date(prompt("When is your next birthday?", "MM/DD/YYYY"));




let second = 1000;
let minute = second * 60;
let hour = minute * 60;
let day = hour * 24; //milliseconds


//5. Then we need to fill the units on the page

let daysCountdown = document.getElementById('days');
let hoursCountdown = document.getElementById('hours');
let minsCountdown = document.getElementById('mins');
let secsCountdown = document.getElementById('secs');

//2. Let's create the coutdown function

function countdown() {

    let currentDate = new Date()
    let timeLeftUntilBirthday = userBirthday - currentDate


    //4. Let's define how much time we have left in every time unit (secs, mins, hours, days)

    let daysLeft = Math.floor(timeLeftUntilBirthday / day)
    let hoursLeft = Math.floor((timeLeftUntilBirthday % day) / hour)
    let minutesLeft = Math.floor((timeLeftUntilBirthday % hour) / minute)
    let secondsLeft = Math.floor((timeLeftUntilBirthday % minute) / second)

    //6. To change the units on the page... innerHTML
    daysCountdown.innerHTML = daysLeft;
    hoursCountdown.innerHTML = hoursLeft;
    minsCountdown.innerHTML = minutesLeft;
    secsCountdown.innerHTML = secondsLeft;

}
//3. We need countdown to count every second so, we need need to use js interval to check this out

setInterval(countdown, 1000);

