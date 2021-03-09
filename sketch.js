const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var gameState="onsling";
var backgroundImg;
function preload(){
  getBackgroundImage();
}

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

  ground=new Ground(600,595,1200,10);

  ground1=new Ground(1195,300,10,600);

  arrow=new Arrow(250,350,100,30);

  balloon=new Balloon(800,550,50,80);

  balloon1=new Balloon(1080,550,50,80);
  balloon2=new Balloon(1020,550,50,80);
  balloon3=new Balloon(900,550,50,80);
  balloon4=new Balloon(950,550,50,80);
  balloon5=new Balloon(1020,480,50,80);
  balloon6=new Balloon(1080,480,50,80);
  balloon7=new Balloon(900,480,50,80);
  balloon8=new Balloon(950,480,50,80);
  balloon9=new Balloon(1020,420,50,80);
  balloon10=new Balloon(1080,420,50,80);
  balloon11=new Balloon(950,420,50,80);
  balloon12=new Balloon(900,420,50,80);
  balloon13=new Balloon(1020,480,50,80);


  slingshot=new SlingShot(arrow.body,{x:250,y:350});
}

function draw() {
  if(backgroundImg){
    background(backgroundImg);
  }
    Engine.update(engine);
  textSize(30);
  text("Press Space Button to take Second Chance",100,50);

  slingshot.display();
  arrow.display();
  balloon.display();
  balloon1.display();
  balloon2.display();
  balloon3.display();
  balloon4.display();
  balloon5.display();
  balloon6.display();
  balloon7.display();
  balloon8.display();
  balloon9.display();
  balloon10.display();
  balloon11.display();
  balloon12.display();
  balloon13.display();


  ground.display();
  ground1.display();

}

function mouseDragged(){
  if(gameState!=="launched"){
      Matter.Body.setPosition(arrow.body, {x: mouseX , y: mouseY});
  }
}

  
function mouseReleased(){
  slingshot.fly();
  gameState="launched";
}


function keyPressed(){
  if(keyCode === 32){
  //   slingshot.attach(arrow.body);
  }
}

async function getBackgroundImage(){
    var response=await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJson=await response.json();
    var dateTime=responseJson.datetime;
    var hour=dateTime.slice(11,13);
    console.log(hour);
    if(hour>=06 && hour<=19){
        bg="bg1.png";

    }
    else{
        bg="bg2.jpg";
    }
    backgroundImg=loadImage(bg);
}