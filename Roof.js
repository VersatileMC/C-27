class Roof {
    constructor(){
       var options ={
        isStatic:true
       }
    
       this.body = Bodies.rectangle(200, 100, 400, 30,options);
     
     this.width = width;
     this.height = height;
    
    
            World.add(world,this.body);
    
    }
    
    display(){
     var pos = this.body.position;
     push();
     translate(pos.x,pos.y);
        rectMode(CENTER);
    
        rect(200, 100, 400, 30);
        pop();
    }
    
    
    
    }