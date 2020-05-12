class Boxes extends BaseClass{
    constructor(x,y){
        super(x,y,25,35);
        
    }
    score(){
        if(this.body.speed > 4 && this.body.speed < 5){
            score = score+1
        }
    }
   
}