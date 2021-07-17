const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var s1,s2,s3,s4,s5,snow
var engine, world;
var drops = [];
var rand;
var maxDrops=100;
function preload(){
s1=loadAnimation("snow1.jpg","snow2.jpg","snow3.jpg")

}


function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);
  s2=createSprite(400,200,800,400)
  s2.addAnimation("bg",s1)
  if(frameCount % 150 === 0){

    for(var i=0; i<maxDrops; i++){
        drops.push(new Snow(random(0,800), random(0,400)));
    }

}
  
}

function draw() {
  Engine.update(engine);
  background(0); 
  drawSprites();
  for(var i = 0; i<maxDrops; i++){
    drops[i].Display();
    drops[i].updateY()
    } 
  
}