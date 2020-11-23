const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var world,slingshot,ball;
var backgroundImg,birdImg;

function preload(){
backgroundImg=loadImage("background.png")
birdImg=loadImage("bird.png")
}

function setup() {
createCanvas(1350,400);
engine = Engine.create();
world = engine.world;

//polygon = Bodies.circle(50,200,20);
//World.add(world,polygon);

block1=new Block(700,170,30,40);
block2=new Block(730,170,30,40);
block3=new Block(760,170,30,40);

block4=new Block(715,130,30,40);
block5=new Block(745,130,30,40);

block6=new Block(730,90,30,40);

block8=new Block(330,235,30,40);
block9=new Block(360,235,30,40);
block10=new Block(390,235,30,40);
block11=new Block(420,235,30,40);
block12=new Block(450,235,30,40);

block13=new Block(360,195,30,40);
block14=new Block(390,195,30,40);
block15=new Block(420,195,30,40);

block16=new Block(390,155,30,40)

block17=new Block(1100,170,30,40);
block18=new Block(1130,170,30,40);
block19=new Block(1160,170,30,40);

block20=new Block(1115,130,30,40);
block21=new Block(1145,130,30,40);

block22=new Block(1130,90,30,40);

block23=new Block(1130,235,30,40);
block24=new Block(1160,235,30,40);
block25=new Block(1190,235,30,40);

ground1=new Ground(390,265,200,20);
ground2=new Ground(730,200,200,20);
ground3=new Ground(1150,265,200,20);

ball=Bodies.circle(50,200,20);
World.add(world,ball)


slingshot=new SlingShot(this.ball, {x:100,y:200});


var render = Render.create({
element: document.body,
engine: engine,
options: {
width: 1300,
height: 600,
wireframes: false
}
});

Engine.run(engine);

}

function draw() {
background(backgroundImg);
text(mouseX+','+mouseY,10,15)

ground1.display();
ground2.display();
ground3.display();

block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();

block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();

block17.display();
block18.display();
block19.display();
block20.display();
block21.display();
block22.display();
block23.display();
block24.display();
block25.display();

image(birdImg,ball.position.x,ball.position.y,50,50)


}

function mouseDragged()
{
Matter.Body.setPosition(this.ball, {x:mouseX, y:mouseY})
}

function mouseReleased()
{
slingshot.fly();

}
function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(this.ball);
    }
}