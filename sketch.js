const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;



var engine,world;
var bg,bgImg;
var snowman,snowmanImg;
var sound;
var snow1,snow2,snow3,snow4,snow5,snow6,snow7,snow8,snow9,snow10,snow11,snow12,snow13,snow14;


function preload(){
  bgImg=loadImage("snow1.jpg");
  sound=loadSound("sound1.mp3");
  snowmanImg=loadImage("img2.jpg");
  
}



function setup() {
  createCanvas(800,400);
  sound.loop();
  engine=Engine.create();
  world=engine.world;

  
  
  snowman=createSprite(250, 320, 50, 50);
  snowman.addImage(snowmanImg);
snowman.scale=0.40;

snow1=new Snow(random(100,700),0,10,10);
snow2=new Snow(random(100,700),0,10,10);
snow3=new Snow(random(100,700),0,10,10);
snow4=new Snow(random(100,700),0,10,10);
snow5=new Snow(random(100,700),0,10,10);
snow6=new Snow(random(100,700),0,10,10);
snow7=new Snow(random(100,700),0,10,10);
snow8=new Snow(random(100,700),0,10,10);
snow9=new Snow(random(100,700),0,10,10);
snow10=new Snow(random(100,700),0,10,10);
snow11=new Snow(random(100,700),0,10,10);
snow12=new Snow(random(100,700),0,10,10);
snow13=new Snow(random(100,700),0,10,10);
snow14=new Snow(random(100,700),0,10,10);

}

function draw() { 
  background(bgImg);  
  Engine.update(engine);





  drawSprites();

  snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();
  snow6.display();
  snow7.display();
  snow8.display();
  snow9.display();
  snow10.display();
  snow11.display();
  snow12.display();
  snow13.display();

  snow14.display();
 



}