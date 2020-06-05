class Ball {
    constructor(x,y,radius) {
      var options ={
          frictionAir: 0,
          friction: 0,
          frictionStatic: 1,
          inertia: Infinity,
          restitution: 0.8,
          density: 0.8
      }
      this.body = Bodies.circle(x,y,radius);
      this.radius = radius;
      World.add(world,this.body);
    }
  
    display() {
      var pos = this.body.position;
      ellipseMode(CENTER);
      fill("black")
      ellipse(pos.x,pos.y,this.radius);
  
    }
  }