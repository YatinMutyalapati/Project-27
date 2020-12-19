
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	box1 = new Box(400,50,200,20);
    box2 = new Box(300,50,20,100);
	box3 = new Box(500,150,20,100);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper = new Paper(350,150,25);

	Engine.run(engine);
  
}


function draw() {
  background(0);
  paper.display();
  drawSprites();
 box1.display();
 box2.display();
 box3.display();
}



