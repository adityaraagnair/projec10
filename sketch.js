var seaImage;
var ship
var see
var shpi

function preload(){


seaImage=loadImage("sea.png");
 
shpi=loadAnimation("ship-3.png");
seaImage=loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  ship = createSprite(100,100);
  ship.velocityX=65
  ship.addAnimation("pic",shpi);
  ship.scale=.3

  
}


function draw() {

  background("blue");
  if(ship.x > 400) {

    ship.x = 0;}
 drawSprites();

}