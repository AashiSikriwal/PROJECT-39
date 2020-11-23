  class Block {
    constructor(x,y,width,height) {
      var options = {
          restitution:0.4,
          friction:0.0,

      }
      this.Visiblity=225
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image=loadImage("wood1.png")
    }
    display(){
      if(this.body.speed<3){
      var angle=this.body.angle;
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate(angle)
      rectMode(CENTER);
      fill("orange");
      stroke("white");
      strokeWeight(2)
      
      image(this.image,0-15,0-20,this.width,this.height)
      pop();
      }
      else{
        World.remove(world,this.body);
        push();
        this.Visiblity=this.Visiblity-5
        pop();
      }

    }

  };