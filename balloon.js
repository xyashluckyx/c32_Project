class Balloon{
    constructor(x, y, width,height) {
        var options = {
            'restitution':1,
            'friction':1.0,
            'density':1.0
        }

        this.body = Bodies.rectangle(x, y, width,height, options);
        this.width=width;
        this.height=height;
        this.visiblity=255;
        this.image = loadImage("blue_balloon0.png");
        World.add(world, this.body);
      }
      display(){
       
        if(this.body.speed < 3){
            var pos=this.body.position;
            push();
            translate(pos.x,pos.y);
            imageMode(CENTER);
            image(this.image, 0, 0, this.width, this.height);
            pop();
           }
           else{
             World.remove(world, this.body);
             push();
             this.Visiblity = this.Visiblity - 5;
             tint(255,this.Visiblity);
             image(this.image, this.body.position.x, this.body.position.y, 50, 50);
             pop();
           }
      }
}