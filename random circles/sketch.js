let sizeRandom = 100;
let xRandom;
let yRandom;

function setup(){

  createCanvas(1100,1100);
  frameRate(10);
  noStroke();
  background(0);
}

function draw(){

  sizeRandom = random(100,300);
  xRandom = random (width);
  yRandom = random (height);
  customShape(xRandom, yRandom, sizeRandom);

}
function customShape(x,y,size) {

  stroke ( 134,151,178);
  strokeWeight(1);
  fill(0, 0,255);
  ellipse(x,y, size,size);

  strokeWeight(5);
  stroke ( 255,207,200);
  ellipse(x,y, size/1.2,size/1.2);

  strokeWeight(1);
  stroke ( 177,178,174);
  ellipse(x,y, size/1.4,size/1.4);

  strokeWeight(5);
  stroke ( 101,141,166);
  ellipse(x,y, size/2,size/2);

  strokeWeight(1);
  stroke ( 255,0,0);
  fill(255);
  ellipse(x,y, size/20,size/20);
}
