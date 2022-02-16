setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')


function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand,hoursRatio)
    
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}
setClock()
function renderTime() {
    var mydate = new Date();
    var year = mydate.getYear();
    if (year < 1000) {
        year += 1900;
    }
    var day = mydate.getDay();
    var month = mydate.getMonth();
    var daym = mydate.getDate();
    var dayarray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursay", "Friday", "Saturday");
    var montharray = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    var hello = document.getElementById("clockDisplay");
    hello.textContent = "" + dayarray[day] + " " + daym + " " + montharray[month] + " " + year + " ";
    hello.innerText = "" + dayarray[day] + " " + daym + " " + montharray[month] + " " + year + " ";
    setTimeout("renderTime()", 1000);
}
renderTime();