const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
 
var engine;
var world;
var base,mainBase;
var box1,box2,box3;
var bo1,bo2;
var box;
var ball;
var chain;
var score = 0;

 
function setup() {
    createCanvas(400, 400);

    // Create an instance of Engine, World
    engine = Engine.create();
    world = engine.world;
    
    base = new Base(310,215,120,15);
    mainBase = new Base(200,360,450,15);
    box1 = new Boxes(310,200);
    box2 = new Boxes(335,200);
    box3 = new Boxes(285,200);

    bo1 = new Boxes(297,135);
    bo2 = new Boxes(323,135);

    box = new Boxes(310,100);
    ball = new Ball(90,250,15);
    chain = new Chain(ball.body,{x:90,y:250});
     

}

 

 
function draw(){
    Engine.update(engine);
    background("black");
    noStroke();
    fill("white");
    textSize(20);
    text("Score: "+score,200,70)
   base.display();
   mainBase.display();
   box1.display();
   box2.display();
   box3.display();

   bo1.display();
   bo2.display();

   box.display();
   ball.display();
   chain.display();

   box1.score();
   box2.score();
   box3.score();
   bo1.score();
   bo2.score();
   box.score();
  
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x: mouseX , y: mouseY});
}
function mouseReleased(){
    chain.fly();
}
function keyPressed(){
    if(keyCode == 32 && ball.body.speed < 1){
        chain.attach(ball.body);
        ball.trajectory = [];
        Matter.Body.setPosition(ball.body,{x: 90, y: 250});
        score = 0;
    } 
}
    