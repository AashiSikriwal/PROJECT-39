class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image=loadImage("wood2.png")
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
      stroke("white")
     
      image(this.image,pos.x-100,pos.y-10,this.width,this.height)
    }
  };