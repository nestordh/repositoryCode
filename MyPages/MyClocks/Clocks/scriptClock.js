
// Reloj con alarma1
const currentTime = document.querySelector(".clock1"),
content = document.querySelector(".content"),
selectMenu = document.querySelectorAll("select"),
setAlarmBtn = document.querySelector("button");

let alarmTime, isAlarmSet,
ringtone = new Audio("./ring.mp3");

for (let i = 12; i > 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 59; i >= 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";
    let option = `<option value="${ampm}">${ampm}</option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

setInterval(() => {
    let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    ampm = "AM";
    if(h >= 12) {
        h = h - 12;
        ampm = "PM";
    }
    h = h == 0 ? h = 12 : h;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    currentTime.innerText = `${h}:${m}:${s} ${ampm}`;

    if (alarmTime === `${h}:${m} ${ampm}`) {
        ringtone.play();
        ringtone.loop = true;
    }
});

function setAlarm() {
    if (isAlarmSet) {
        alarmTime = "";
        ringtone.pause();
        content.classList.remove("disable");
        setAlarmBtn.innerText = "Activar alarma";
        return isAlarmSet = false;
    }

    let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;
    if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
        return alert("Please, select a valid time to set Alarm!");
    }
    alarmTime = time;
    isAlarmSet = true;
    content.classList.add("disable");
    setAlarmBtn.innerText = "Borrar alarma";
}

setAlarmBtn.addEventListener("click", setAlarm);


// reloj2
const week =["Domingo", "Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
    
    function updateTime() {
        var now = new Date();

        document.getElementById("time2").innerText =
        zeroPadding(now.getHours(),2) + ":" +
        zeroPadding(now.getMinutes(),2) + ":" +
        zeroPadding(now.getSeconds(),2);
        
        document.getElementById("date2").innerText = 
            now.getFullYear() + "-" +
            zeroPadding(now.getMonth() + 1, 2) + "-" +
            zeroPadding(now.getDate(), 2) + " " + 
        week[now.getDay()];
    }

    updateTime();
    setInterval(updateTime, 1000);

    function zeroPadding(num, digit) {
        return String(num).padStart(digit, "0");
    }

    // reloj3
    function clock3(){

        var hours = document.getElementById('hour3');
        var minutes = document.getElementById('minutes3');
        var seconds = document.getElementById('seconds3');
        var ampm = document.getElementById('ampm3');

        var h = new Date().getHours();
        var m = new Date().getMinutes();
        var s = new Date().getSeconds();
        var am = "AM";

        if(h > 12){
            h = h - 12;
           var am = "PM"
        }
        h = (h < 10) ? "0" + h : h
        m = (m < 10) ? "0" + m : m
        s = (s < 10) ? "0" + s : s


        hours.innerHTML = h;
        minutes.innerHTML = m;
        seconds.innerHTML = s;
        ampm.innerHTML = am

    }

    var interval = setInterval(clock, 1000);
