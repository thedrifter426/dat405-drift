let sizeRandom = 100;
let xRandom;
let yRandom;

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

  stroke(0, 0, 478);
  strokeWeight(50);
  fill(random(255), random(255), random(255));
  ellipse(x, y, size, size);


  stroke(478, 0, 0);
  strokeWeight(50);
  fill(random(255), random(255), random(255));
  rect(x, y, size, size);
}

   function keyPressed() {

      if (key == "A") displayEllipse;
      if (key == "S") displayRect;
      if (key == "3");
   }
  /* stroke(0, 0, 178);
   strokeWeight(3);
   fill(0, 0, 0);
   fill(random(255), random(255), random(255));
   star(x,y,size,size,size); */
