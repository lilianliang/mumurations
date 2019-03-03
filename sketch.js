const flock = [];

let alignSlider, cohesionSlider, separationSlider;

function setup() {
    createCanvas(1500, 700);
    textSize(35);

    alignSlider = createSlider(0, 5, 1, 0.1);
    alignSlider.position(10, 390);
    cohesionSlider = createSlider(0, 5, 1, 0.1);
    cohesionSlider.position(10, 420);
    separationSlider = createSlider(0, 5, 1, 0.1);
    separationSlider.position(10, 450);
    maxForceSlider = createSlider(0, 1, 0.5, 0.1);
    maxForceSlider.position(10, 480);
    maxSpeedSlider = createSlider(0, 10, 5, 1);
    maxSpeedSlider.position(10, 510);
    radiusSlider = createSlider(0, 100, 30, 10);
    radiusSlider.position(10, 540);

    for (let i = 0; i < 200; i++) {
        flock.push(new Boid());
    }
}

function draw() {
    // NOTE: Cool effect if you comment out background!! Leaves lil trails
    background(300);
    text('alignment', alignSlider.x * 2 + alignSlider.width, 405);
    text('cohesion', cohesionSlider.x * 2 + cohesionSlider.width, 435);
    text('separation', cohesionSlider.x * 2 + cohesionSlider.width, 465);
    text('maxForce', maxForceSlider.x * 2 + maxForceSlider.width, 495);
    text('maxSpeed', maxSpeedSlider.x * 2 + maxSpeedSlider.width, 525);
    text('radius', radiusSlider.x * 2 + radiusSlider.width, 555);

    for (let boid of flock) {
        boid.edges();
        boid.flock(flock);
        boid.update();
        boid.show();
    }
}