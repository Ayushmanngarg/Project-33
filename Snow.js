class Snow {
    constructor(x, y) {
        var options = {
         density: 1,
         friction: 0.5,

    }
    this.image = loadImage("snow4.webp");
    this.body = Bodies.circle(x,y, options);
   World.add(world, this.body);
}
    display() {
     var pos = this.body.position;
     translate(pos.x, pos.y );
     imageMode(CENTER);
    ellipseMode(RADIUS);
    ellipse(0,0) ;
    }
