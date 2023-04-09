const daysE = document.getElementById('days');
const hoursE = document.getElementById('hours');
const minutesE = document.getElementById('minutes');
const secondsE = document.getElementById('seconds');
const newYear = "1 Jan 2024";
function countDown() {
    const newYearDate = new Date(newYear);
    const currentDate = new Date()
    const milisecondsLeft = newYearDate - currentDate;
    const seconds = (milisecondsLeft) / 1000;
    const days = Math.floor(seconds / 3600 / 24);
    const hours = Math.floor(seconds / 3600) % 24;
    const minutes = Math.floor(seconds / 60) % 60;
    const second = Math.floor(milisecondsLeft / 1000) % 60;
    daysE.innerHTML = days;
    hoursE.innerHTML = hours;
    minutesE.innerHTML = minutes;
    secondsE.innerHTML = second;
}
countDown();
setInterval(countDown, 1000)