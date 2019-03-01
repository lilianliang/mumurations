class Boid {
    constructor() {
        this.position = createVector(random(width), random(height));
        this.velocity = p5.Vector.random2D();
        this.velocity.setMag(random(2, 4));
        this.acceleration = createVector();
        this.maxForce = 0.5;
        this.maxSpeed = 5;
    }

    edges() {
        if (this.position.x > width) {
            this.position.x = 0;
        } else if (this.position.x < 0) {
            this.position.x = width;
        }
        if (this.position.y > height) {
            this.position.y = 0;
        } else if (this.position.y < 0) {
            this.position.y = height;
        }
    }

    applyForce(boids, force) {
        let perceptionRadius = 40;
        let steering = createVector();
        let total = 0;
        for (let other of boids) {
            let d = dist(this.position.x, this.position.y, other.position.x, other.position.y);
            if (other != this && d < perceptionRadius) {
                if (force == "align") {
                    steering.add(other.velocity);
                } else if (force == "cohesion") {
                    steering.add(other.position);
                } else if (force == "separation") {
                    let diff = p5.Vector.sub(this.position, other.position);
                    diff.div(Math.pow(d, 2));
                    steering.add(diff);
                }
                total++;
            }
        }
        if (total > 0) {
            steering.div(total);
            if (force == "cohesion") {
                steering.sub(this.position);
            }
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
        }
        return steering;
    }

    flock(boids) {
        let alignment = this.applyForce(boids, "align");
        let cohesion = this.applyForce(boids, "cohesion");
        let separation = this.applyForce(boids, "separation");

        alignment.mult(alignSlider.value());
        cohesion.mult(cohesionSlider.value());
        separation.mult(separationSlider.value());

        this.acceleration.add(alignment);
        this.acceleration.add(cohesion);
        this.acceleration.add(separation);
    }

    update() {
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxSpeed);
        this.acceleration.set(0,0);
    }

    show() {
        stroke(300);
        noFill();
        triangle(this.position.x-5, this.position.y+10,
            this.position.x, this.position.y,  
            this.position.x+5, this.position.y+10);
    }
}