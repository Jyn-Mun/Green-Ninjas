var canvas;

function setup() {
  let sizeCanvas = max(windowWidth, windowHeight);
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style("z-index", "-1");
  colorMode(HSL, 1);
  noStroke();
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

let dotSize = 0.1;
let radius = Math.sqrt(0.5) + dotSize;
let PHI = (1 + Math.sqrt(5)) / 2;
let t;
let frames = 300;

function cosn(v){
return sin(v * TWO_PI) * 0.5 + 0.5;
}

function invCos(v){
  return 1 - cosn(v);
}


function draw() {
  // t = fract(frameCount/ frames);
   t = (frameCount/ frames);
   // t = (mouseX/mouseY)

  scale(width, height);
  background(fract(t/1.5), 100, 0.1);
  fill(1);

  let count = 2000 * invCos(t/2);
  for (let i = 0; i < count; i++){
    let f = i / count;
    let a = i * PHI;
    let dist = f * radius;

    x = 0.5 + cos(a * PI) * dist;
    y = 0.5 + sin(a * PI) * dist;

    let sig = pow(cosn(f - t * 6), 2) ;
    let r = sig * f * dotSize;

    // let hue = f * 0.5 + 0.3 ;
    let hue = fract(f * 0.5 + t/2);
    let sat = 1;
    let light = 0.7 * sig +0.15;

    let clr = color(hue, sat, light);
    fill(clr)
    circle(x, y, r)

  }

}
