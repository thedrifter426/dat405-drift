function setup() {
  createCanvas(720, 400);
  background(0);
  noStroke();
}

function draw() {
  fill(color(random(255),random(150),random(80), 1));
  bezier(random(500, 500), random(100, 500), 10, 10, 40, 40, 50, -9000);
  bezier(random(100, 500), random(100, 300), 10, 10, 90, 90, 50, 20);
}
