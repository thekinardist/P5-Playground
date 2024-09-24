var img;

function preload() {

}

function setup() {
  createCanvas(1000, 667, WEBGL);
  img = loadImage("portrait1.png");
rectMode(CENTER); 
  //imageMode(CENTER);
  img.loadPixels();
  //background(0);
  //noCursor();



}
function draw() {

  for (var i = 0; i < 1000; i += frameCount) {
    float x = random(img.width);
      float y = random(img.height);
      //var z = random(-100, -150);
      float c = img.get(int(x), int(y));
      //noStroke(); 
      push(); fill(c);

      translate(x, y); spinBox(); pop();
    }
  }

  function spinBox() {
    //rotateY(0.03 * frameCount);
    box(20);


  }