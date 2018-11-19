let sizeRandom = 100;
let xRandom;
let yRandom;
let state;
function setup() {

  createCanvas(1020, 500);
  frameRate(10); //Drawing speed 10 fps
  noStroke();
  background(0);
}

function draw()  {

  sizeRandom = random(50, 300);
  xRandom = random(width);
  yRandom = random(height);
  customShape(xRandom, yRandom, sizeRandom);
}

function customShape(x, y, size) {

  if (state == 1) {
    stroke(0, 0, 478);
    strokeWeight(5);
    fill(0,0,0);
    fill(random(255), random(255), random(255));
    ellipse(x, y, size, size);
}
    else if (state == 2) {
     stroke(478, 0, 0);
     strokeWeight(5);
     fill(0,0,0);
     fill(random(255), random(255), random(255));
     rect(x, y, size, size);
  }

  else if (state == 3) {
  stroke(0, 0, 178);
  strokeWeight(3);
  fill(0,0,0);
  fill(random(255), random(255), random(255));
  triangle(x, y,size, size);
}
}

function keyPressed() {
  if (key == '1') state = 1;
  if (key == '2') state = 2;
  if (key == '3') state = 3;
}

  /* stroke(0, 0, 178);
   strokeWeight(3);
   fill(0, 0, 0);
   fill(random(255), random(255), random(255));
   star(x,y,size,size,size); */
