class Cannonball{
    constructor(x,y){
        var options ={
            density:1,
            friction:1,
            restitution:0.5,
            isStatic:true
        }

        this.image = loadImage("assets/cannonball.png");
        this.x = x;
        this.y = y;
        this.r = 40;
        this.body = Bodies.circle(x, y, this.r, options);
        World.add(world, this.body)

    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r,this.r);
        pop();
      }

      shoot(){
          var velocity = p5.Vector.fromAngle(cannon.angle)
          velocity.mult(20) 
          Matter.Body.setStatic(this.body,false)
          Matter.Body.setVelocity(this.body,{x:velocity.x,y:velocity.y})
      }
}