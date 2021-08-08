class rope{
	constructor(body1, body2, pointA, pointB)
	{
		this.pointA = pointA
		this.pointB = pointB
	
		var options = {
			bodyA : body1,
			bodyB : body2,
			pointB : {x: this.pointA, y: this.pointB}
		}
	
		//create rope constraint here

		con1 = Matter.Constraint.create({
			pointA:{ x:320, y:100},
			body2: bob1,
			pointB: {x:300, y:10},
			length : 100,
			stiffness : 1
		});

		World.add(world, con1);
	
	}


    //create display() here 
	display()
	{
		  
	  //var pointA = this.body1.position;
	  //var pointB = this.body2.position;
  
	  strokeWeight(2);

	  line(con1.pointA.x,con1.pointA.y,bob1.position.x,bob1.position.y);
	  line(con1.pointA.x+40,con1.pointA.y,bob2.position.x,bob2.position.y);
	  line(con1.pointA.x+80,con1.pointA.y,bob3.position.x,bob3.position.y);
	  line(con1.pointA.x+120,con1.pointA.y,bob4.position.x,bob4.position.y);
	  line(con1.pointA.x+160,con1.pointA.y,bob5.position.x,bob5.position.y);

  }

}
