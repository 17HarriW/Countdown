const elements = {
    timer: document.getElementById("timer"),
    start: document.getElementById("btn-start"),
    reset: document.getElementById("btn-reset")
}
const re = /(\d+)[:](\d+)[:](\d+)/;

var timerHours = re.match(timer.value);

let running = false;

function start() {
    running = !running;
    elements.start.innerText = running ? "Stop" : "Start";
    console.log(timerSecs);
    console.log(timerMins);
    console.log(timerHours);
}


function reset() {
    timer.value = "00:00:00";
    clearInterval()
}