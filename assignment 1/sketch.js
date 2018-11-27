let particles = [];
function setup() {
  createCanvas(841, 594);
  colorMode(HSB, 255);
	//blendMode(ADD);
}

function draw() {
  background("black");
  let newParticles = [];
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].wallBound();
    particles[i].display();
    if (particles[i].radius > 0)
    {      newParticles.push(particles[i]);    }
  }
  particles = newParticles;  }
  // here I setup the canvas background to black and created an array
  // create the newParticles variable
  // created a for loop for the particles and used the push method to add new newParticles

function mouseMoved() {
  let x = mouseX;
  let y = mouseY;
  let vx = (winMouseX - pwinMouseX) * 0.1;
  let vy = (winMouseY - pwinMouseY) * 0.1;
	if ((x > 20 && x < width -20) && (y > 20 && y < height - 20)) {
  	particles.push(new Particle(x, y, vx, vy));
	}
}
/* here I used the mouseMoved event and called the push event
  for particles to appair on mouse movement / hover if the condition is meet */

let Particle = function(x, y, vx, vy) {
  this.position = createVector(x, y);
  this.velocity = createVector(vx, vy);
  this.friction = 0.005;
  this.h = 255 * abs(cos((frameCount/600)*PI));
  this.fcolor = color(this.h, 255, 255, 100);
  this.ecolor = color(this.h, 255, 255, 200);
  this.radius = random(0, 100);
}
/* here I'm creating a global variable for the particles and use the this keyword
to setup some values to use later for the new particles*/

Particle.prototype.update = function() {
  this.velocity = this.velocity.mult(1 - this.friction);
  this.position = this.position.add(this.velocity);
  this.radius -= 0.1;
}

Particle.prototype.wallBound = function() {
  if ((this.position.x >= width - this.radius) || (this.position.x <= this.radius)) {
    this.velocity.x = -this.velocity.x;
  }
  else if ((this.position.y >= height - this.radius) || (this.position.y <= this.radius)) {
    this.velocity.y = -this.velocity.y;
  }
	else {
		return;
	}
}

Particle.prototype.display = function() {
  stroke(this.ecolor);
  strokeWeight(2);
  push();
  translate(this.position.x, this.position.y);
  fill(this.fcolor);
  ellipse(0, 0, 2*this.radius, 2*this.radius);

  pop();
}
