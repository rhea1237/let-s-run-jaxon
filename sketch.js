
var jaxon;
var path;
var boundaryright;
var boundaryleft;



function preload(){

  //pre-load images
  jaxon_running = loadAnimation("Runner-1.png","Runner-2.png");
  path_image = loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  jaxon = createSprite(50,200);
  jaxon.addAnimation("running", jaxon_running);
  jaxon.scale = 0.1;
  jaxon.depth = 1;
  
  path = createSprite(200,50);
  path.addImage("path",path_image);
  path.velocityY = 4;
  path.scale = 1.2;
  path.depth = jaxon.depth-1;

  boundaryleft = createSprite 

}

function draw() {
  background(0);

  if(path.y > 400){
    path.y = height/2
  }
  drawSprites();
}

