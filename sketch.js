// Georgi Nikolov
// Solar System Model
// "sketch.js"

let sun

function setup() {  // Setting up the main "window"
    createCanvas(700,700)
    sun = new Body(100, createVector(0,0), createVector(0,0))
}

function draw() {   // background color & planets
    background(180)
    sun.show()
}

function Body(_mass, _pos, _vel){
    this.mass = _mass
    this.pos = _pos
    this.vel = _vel
    this.r = this.mass

    this.show = function(){
        noStroke(); fill(255); 
        ellipse(this.pos.x, this.pos.y, this.r, this.r)
    }
}
// new comment