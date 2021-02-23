class ground
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:false			
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.image=loadImage("image-removebg-preview (3).png");
		this.body=Bodies.rectangle(x,y,w,h,options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			imageMode(CENTER)
			image(0,0,this.w, this.h);
			pop()
			
	}

}