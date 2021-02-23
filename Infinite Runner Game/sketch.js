const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var car, ground, stop, ufo, carIMG, groundIMG, stopIMG, ufoIMG

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	var cargroup=creategroup();
	var stopgroup=creategroup();
	var ufogroup=creategroup();


	engine = Engine.create();
	world = engine.world;
	carIMG=new car(1200,650);
	stopIMG=new stop(200,450,40);
	groundIMG=new ground(width/2,670,width,20);
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  //rectMode(CENTER);
  background("black");
 
  carIMG.display();
  stopIMG.display();
  groundIMG.display();
  ufoIMG.display();

if(ufoIMG.isTouching(carIMG)){
ufogroup.destroy();
  }
  if(ufoIMG.isTouching(stopIMG)){
	ufogroup.destroy();
	}
ufoIMG.velocityY=-4;

groundIMG.velocityY=4;
if(groundIMG.y<0){
	groundIMG.y=groundIMG.width/2;
}
  
 
SpawnCars();
SpawnStop();
drawSprites();
}

function keyPressed() {
  	if (keyCode === LEFT_ARROW) {
ufoIMG.velocityX=-4;
	  }
	if (keyCode === RIGHT_ARROW) {
ufoIMG.velocityX=4;
	}
}

function SpawnCars(){
	if(World.frameCount%80==0) {
	 var car=createSprite(400,220);
     car.scale=1;
	 car.lifetime=1000;
	 cargroup.add(car);
	}
}
function SpawnStop(){
	if(World.frameCount%80==0) {
	 var stop=createSprite(800,440);
     stop.scale=1;
	 stop.lifetime=1000;
	 stopgroup.add(stop);
	}
}





