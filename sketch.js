const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1, bob2, bob3, bob4, bob5;

var rope1, rope2, rope3, rope4, rope5;

var con1;

var bobNum;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	rope1 = new rope(bob1, roof, -80, 0);
	rope2 = new rope(bob2, roof, -160, 0);	
	rope3 = new rope(bob3, roof, -80, 0);	
	rope4 = new rope(bob4, roof, -80, 0);	
	rope5 = new rope(bob5, roof, -80, 0);	


	var roof_options={
		isStatic:true			
	}

	var bob_options={
		isStatic:true
	}



	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	bob1 = Bodies.circle(320, 300, 40, bob_options);
	bob2 = Bodies.circle(360, 300, 40, bob_options);
	bob3 = Bodies.circle(400, 300, 40, bob_options);
	bob4 = Bodies.circle(440, 300, 40, bob_options);
	bob5 = Bodies.circle(480, 300, 40, bob_options);

	World.add(world, bob1);
	World.add(world, bob2);
	World.add(world, bob3);
	World.add(world, bob4);
	World.add(world, bob5);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here

  rope1.display(bob1);
  rope2.display(bob2)
  rope3.display(bob3);
  rope4.display(bob4);
  rope5.display(bob5);
  
  //create ellipse shape for multiple bobs here
  ellipse(bob1.position.x, bob1.position.y, 40);
  ellipse(bob2.position.x, bob2.position.y, 40);
  ellipse(bob3.position.x, bob3.position.y, 40);
  ellipse(bob4.position.x, bob4.position.y, 40);
  ellipse(bob5.position.x, bob5.position.y, 40);
 
 

}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.

function keyPressed(){
	
	if(keyCode === DOWN_ARROW){

		Matter.Body.applyForce(bob5, {x: 0, y:0}, {x: 5, y: 5})

		console.log("work")
	}
	
}

