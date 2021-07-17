class Snow{

    constructor(x,y){
        var options = {
            friction: 0.001,
            restitution:0.1     
        
        }
       this.s4=loadImage("snow5.webp")
        this.snow = Bodies.circle(x,y,50,options)
        this.radius = 50;
        World.add(world, this.snow);
    }

    updateY(){     
        if(this.snow.position.y > height){

            Matter.Body.setPosition(this.snow, {x:random(0,800), y:random(0,400)})
        }
    }

  Display(){
        
        imageMode(CENTER);
        image(this.s4,this.snow.position.x,this.snow.position.y,this.radius,this.radius);
    }
}