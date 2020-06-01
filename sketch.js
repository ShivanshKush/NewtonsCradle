var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,bob1,bob2,bob3,bob4,bob5,chain1,chain2,chain3,chain4,chain5;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 800);

	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	ground = new Ground(500,200,500,40);

	bob1 = new Ball(500,500,50);
	bob2 = new Ball(400,500,50);
	bob3 = new Ball(300,500,50);
	bob4 = new Ball(600,500,50);
	bob5 = new Ball(900,500,50);
	bob1.debug = true;

	chain1 = new Chain(bob1.body,ground.body,0,10);
	chain2 = new Chain(bob2.body,ground.body,-100,10);
	chain3 = new Chain(bob3.body,ground.body,-200,10);
	chain4 = new Chain(bob4.body,ground.body,100,10);
	chain5 = new Chain(bob5.body,ground.body,200,10);
	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  background("grey");
   ground.display();

   bob1.display();
   bob2.display();
   bob3.display();
   bob4.display();
   bob5.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  drawSprites();
}



