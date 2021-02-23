class car
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution:0.3,
			friction:0.5,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("image-removebg-preview (1).png");
		World.add(world, this.body);

	}
	display()
	{
			
			var carpos=this.body.position;		

			push()
			translate(carpos.x, carpos.y);
			imageMode(CENTER)
			image(0,0,this.r, this.r);
			pop()
			
	}

}