var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	var options={
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2

		}
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(56,46,55,55);
  matter.body.circle(200,200,[options],[maxSides])
  World.add(world,circle);
  drawSprites();
 
}

function keyPressed(){
	 if(keyCode === UP_ARROW)
	 {
		  
         Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});		

	 }
}



