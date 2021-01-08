const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world,ground,stand,stand2;
var polygon_Img;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16;
var polygon,slingShot;
var blk1,blk2,blk3,blk4,blk5,blk6,blk7,blk8,blk9,blk10,blk11,blk12,blk13,blk14,blk15,blk16;


function preload()
{
    polygon_Img=loadImage("polygon.png");
}
function setup()
{
    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground=new Ground(600,height,1200,40);
    stand=new Ground(600,350,250,10);
    stand2 = new Ground(900,200,250,10);
    //level one blocks
  // fill("lightblue");
    b1=new Box(520,310,30,40);
   b2=new Box(550,310,30,40);
    b3=new Box(580,310,30,40);
    b4=new Box(610,310,30,40);
    b5=new Box(640,310,30,40);
    b6=new Box(670,310,30,40);
    b7=new Box(700,310,30,40);
    //level two blocks
    b8= new Box(550,270,30,40);
    b9=new Box(580,270,30,40);
    b10=new Box(610,270,30,40);
    b11=new Box(640,270,30,40);
    b12=new Box(670,270,30,40);
    //level 3 blocks
    b13=new Box(580,230,30,40);
    b14=new Box(610,230,30,40);
    b15=new Box(640,230,30,40);
    //top
    b16 = new Box(610,190,30,40);
    // set2 blocks
    //level1
    blk1=new Box(810,160,30,40);
    blk2=new Box(840,160,30,40);
    blk3=new Box(870,160,30,40);
    blk4=new Box(900,160,30,40);
    blk5=new Box(930,160,30,40);
    blk6=new Box(960,160,30,40);
    blk7=new Box(990,160,30,40);
    //level2
    blk8=new Box(840,120,30,40);
    blk9=new Box(870,120,30,40);
    blk10=new Box(900,120,30,40);
    blk11=new Box(930,120,30,40);
    blk12=new Box(960,120,30,40);
    //level3
    blk13=new Box(870,80,30,40);
    blk14=new Box(900,80,30,40);
    blk15=new Box(930,80,30,40);
    //top
    blk16=new Box(900,40,30,40);


    polygon=Bodies.circle(50,200,20);
    World.add(world,polygon);
    slingShot=new SlingShot(this.polygon,{x:100,y:200});
    Engine.run(engine);

}
function draw()
{
    background(0);
    Engine.update(engine);
    fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);
    
    ground.display();
    stand.display();
    stand2.display();
    fill("lightblue");
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    fill("pink");
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    fill("turquoise");
    b13.display();
    b14.display();
    b15.display();
    fill("grey");
    b16.display();
    fill("lightblue");
    blk1.display();
    blk2.display();
    blk3.display();
    blk4.display();
    blk5.display();
    blk6.display();
    blk7.display();
    fill("aqua");
    blk8.display();
    blk9.display();
    blk10.display();
    blk11.display();
    blk12.display();
    fill("yellow");
    blk13.display();
    blk14.display();
    blk15.display();
    fill("green");
    blk16.display();
    imageMode(CENTER);
    image(polygon_Img,polygon.position.x,polygon.position.y,40,40);
    slingShot.display();

    
}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}
function keyPressed()
{
    if(keyCode === 32)
    {
        slingShot.attach(this.polygon);
    }
}