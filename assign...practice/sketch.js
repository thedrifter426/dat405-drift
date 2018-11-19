function setup() {
  createCanvas(841, 594);
  background(0);
  noStroke();
}

function draw() {
  fill(color(random(255),random(150),random(80), 1));
  bezier(random(100, 500), random(100, 500), 100, 0, 40, 400, 5000, 9000);
  bezier(random(100, 800), random(100, 300), 0, 0, 400, 400, 500, 0);
}
