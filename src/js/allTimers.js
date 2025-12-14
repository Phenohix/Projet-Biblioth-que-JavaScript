PLAYER_TIME_LIMIT = 15*1000;
const p1t = document.getElementById("playerTimer1"); let timer_p1 = 0;
const p2t = document.getElementById("playerTimer2"); let timer_p2 = 0;
turn = true;
GLOBAL_TIME_LIMIT = 10*60*1000;

function playerTimers(delta) {
    if (turn) {
        timer_p1 += 1000*delta;
    }
    else {
        timer_p2 += 1000*delta;
    }

    p1t.innerText = `Player 1: ${round((PLAYER_TIME_LIMIT-timer_p1)/1000%60+0.2)}s`;
    p2t.innerText = `Player 2: ${round((PLAYER_TIME_LIMIT-timer_p2)/1000%60+0.2)}s`;

    if (timer_p1>=PLAYER_TIME_LIMIT && turn) {
        timer_p2 = 0;
        timer_p1 = PLAYER_TIME_LIMIT; // safety measure for display to avoid going below 0
        turn = false;
        document.documentElement.style.setProperty("--opacityPlayer1", "55%");
        document.documentElement.style.setProperty("--opacityPlayer2", "100%");
    }
    else if (timer_p2>=PLAYER_TIME_LIMIT && !turn) {
        timer_p1 = 0;
        timer_p2 = PLAYER_TIME_LIMIT; // safety measure for display to avoid going below 0
        turn = true;
        document.documentElement.style.setProperty("--opacityPlayer1", "100%");
        document.documentElement.style.setProperty("--opacityPlayer2", "55%");
    }
}

function globalTimer(delta) {
    let timeLeft = GLOBAL_TIME_LIMIT-(timeElapsed*10);
    if (timeLeft>0) {
        document.getElementById("test").innerText = `
                Time left: ${time_see(timeLeft, 0)}s
            `;
    }
    else {document.getElementById("test").innerText = `
                Time's up!
            `;}
    return timeLeft;
}