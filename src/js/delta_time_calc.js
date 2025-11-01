// LOW_LIMIT = 0.0166667 // Keep under 60fps
// HIGH_LIMIT = 0.1 // Keep over 10fps

let lastTime = new Date().getTime();

function delta_time() {
    let currentTime = new Date().getTime();
    let delta = (currentTime-lastTime) / 1000;

    lastTime = currentTime;

    //Limit framerate
    // if (delta < LOW_LIMIT) {delta = LOW_LIMIT;}
    // else if (delta < HIGH_LIMIT) {delta = HIGH_LIMIT;}*/

    return delta;
}