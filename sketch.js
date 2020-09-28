
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;

var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof();

	bobObject1 = new Bob(225,500,80);
	bobObject2 = new Bob(310,500,80);
	bobObject3 = new Bob(395,500,80);
	bobObject4 = new Bob(480,500,80);
	bobObject5 = new Bob(565,500,80);
	rope1=new Rope(bobObject1.body,roofObject.body,-bobDiameter*2, 0);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.run(engine);

	roof.display();
	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();
	rope1.display();
	

  drawSprites();
 
}