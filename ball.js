class Ball{
    constructor(x,y,radius){
        var options={
            'friction': 0.5,
            'restitution':0.8
        }
        this.body = Bodies.circle(x,y,radius);
        this.radius = radius;
        this.smokeImage = loadImage("smoke.png");
        this.trajectory = []
        World.add(world,this.body);
    }
    display(){
        //this.body.position.x = mouseX;
        //this.body.position.y = mouseY;
        ellipseMode(RADIUS);
        fill("orange");
        noStroke();
        ellipse(this.body.position.x,this.body.position.y,this.radius);

        if(this.body.velocity.x > 7 && this.body.position.x > 100){
            var position = [this.body.position.x, this.body.position.y];
            this.trajectory.push(position);
          }
         
      
          for(var i=0; i<this.trajectory.length; i++){
            image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
          }
    }
}