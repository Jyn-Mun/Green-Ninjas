
'use strict';

var tileCount = 20;

var moduleColor;
var moduleAlpha = 180;
var maxDistance = 500;
var canvas;

function windowResized() {
  resizeCanvas(displayWidth, displayHeight + 1000);
}

function setup() {
  canvas = createCanvas(displayWidth + 1000, displayHeight + 800);
  canvas.position(0, 0);
  canvas.style("z-index", "-1");
  // background(255, 0, 250)
  background(0)

  fill(55, 0, 255)
  stroke(50, 200, 50, 40)
  strokeWeight(15);

}

function draw() {
  clear();

  for (var gridY = 0; gridY <= 4000; gridY += 30) {
    for (var gridX = 0; gridX <= 4000; gridX += 30) {
      var diameter = dist(mouseX, mouseY, gridX, gridY);
      diameter = diameter / maxDistance * 60;
      push();
      translate(gridX, gridY, diameter * 5);
      line(0, 0, diameter, diameter);
      pop();
    }
  }
}
