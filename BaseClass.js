class BaseClass{

    constructor(x,y,width,height){
        var options={
            friction: 0.5,
            restitution:0.8
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        strokeWeight(3);
        stroke("red");
        fill("white");
        rect(0,0,this.width,this.height);
        pop();
    

        
    }
}