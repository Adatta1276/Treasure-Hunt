var bg,bg2,form,system,code,security;
var score=0;

function preload() {
 
  
  bg= loadImage("aladdin_img.jpg")
  //load image for the treasure background
  
}

function setup() {
  createCanvas(1932.5,913);
  security = new Security();
  system = new System();
  
  
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  textSize(60);
  text("Score: " + score, width/2-30, 70);
// add code for changing the background to the treasure background
  

  if(score === 3) {
    clear()
    background(bg2)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  }

  drawSprites()
}

function mouseReleased() {
  let fs = fullscreen();
  fullscreen(!fs);
}