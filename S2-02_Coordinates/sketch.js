//DAT405 / GAD405
//S2-02_Coordinates

//Initialization function
function setup() {
  //Set the size of rendering window - pixels
  createCanvas(700, 400);

  //Set the size of all text
  textSize(18);
}

//Rendering function
function draw() {
  //Erase all canvas. Set the color to white
  background(100);
  noStroke();

  //Top left corner shape position and color
  fill(0, 0, 255);
  ellipse(52, 52, 100, 100);
  stroke(204, 0, 204);
  strokeWeight(10);
  line(106, 52, 600, 52);

  //Top right corner shape position and color
  noStroke();
  fill(255, 0, 0);
  ellipse(647, 52, 100, 100);
  stroke(102, 178, 255);
  line(52, 300, 52, 106);


  //Bottom left corner shape position and color
  noStroke();
  fill(0, 255, 0);
  ellipse(52, 347, 100, 100);
  stroke(255, 255, 51)
  line(104, 335, 604, 85);
  stroke(153, 255, 51);
  line(104, 355, 600, 350);


  //Bottom right corner shape position and color
  noStroke();
  fill(255, 255, 0);
  ellipse(647, 347, 100, 100);
  stroke(255, 153, 51);
  line(647, 293, 647, 105);
  stroke(0, 204, 0);
  line(600, 320, 94, 86);
}
