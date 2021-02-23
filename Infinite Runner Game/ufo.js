class ufo
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.ufoWidth=200;
		this.ufoHeight=100;
		this.wallThickness=20;
		this.angle=0;	
		
		this.image=loadImage("image-removebg-preview.png");
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;

			

			push()
			translate(posLeft.x, posLeft.y);
			imageMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			stroke(255)
			rotate(this.angle)
			image(0,0,this.wallThickness, this.dustbinHeight);
			pop()

			push()
			translate(posRight.x, posRight.y);
			imageMode(CENTER)
			//strokeWeight(4);
			stroke(255)
			angleMode(RADIANS)
			fill(255)
			rotate(-1*this.angle)
			image(0,0,this.wallThickness, this.ufoHeight);
			pop()

			push()
			translate(posBottom.x, posBottom.y);
			imageMode(CENTER)
			//strokeWeight(4);
			stroke(255)
			angleMode(RADIANS)
			fill(255)
			image(0,0,this.ufoWidth, this.wallThickness);
			pop()
			
	}

}