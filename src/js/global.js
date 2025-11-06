let timeElapsed = 0;
let goal = 10000;
let startTime = new Date().getTime();
let round = Math.round
let floor = Math.floor


function copy(tcpy) { return tcpy; }

function time_see(ms, compensation) {
    seconds = ms/1000;
    minutes = seconds/60; seconds = floor(seconds%60);
    hours = floor(minutes/60%24+compensation); minutes = floor(minutes%60);

    return ((hours)?(hours+":"):(""))+((minutes)?(minutes+":"):(""))+seconds;
}

function test(delta) {
    currentTime = new Date().getTime();

    timeElapsed += 100 * delta;

    if (timeElapsed<goal) {
        document.getElementById("test").innerText = `
            Progression: ${round(timeElapsed)} / ${goal}
            Start time: ${time_see(startTime, 1)}
            Current time: ${time_see(currentTime, 1)}
            Time elapsed: ${time_see(timeElapsed*10, 0)}
            fps: ${round(1/delta)}
        `;
    }
    else {
        document.getElementById("test").innerText = `
            Progression: ${round(timeElapsed)} / ${goal}
            You got it boss!!
        `;
        if (timeElapsed>=goal*2) {timeElapsed=0;}
    }
}