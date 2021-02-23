class stop
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
		}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("stopSign.png");
		this.body=Bodies.circle(x,y,r,options);
		World.add(world, this.body);

	}
	display()
	{
			
			var stoppos=this.body.position;		

			push()
			translate(stoppos.x, stoppos.y);
			imageMode(CENTER)
			image(0,0,this.r, this.r);
			pop()
			
	}

}