const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload(){

   polyImg = loadImage("Sprites/poly.png");
}

function setup() {
  createCanvas(1200,500);
  //createSprite(400, 200, 50, 50);

  engine=Engine.create ();
  world=engine.world ; 

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  Engine.run(engine);

  ground = new Ground(600,490,1300,25);

  ground1 = new Ground(466,421,290,20);
  ground2 = new Ground(875,250,250,20);


  block1 = new Block(349,383,40,55);
  block2 = new Block(390,383,40,55);
  block3 = new Block(430,383,40,55);
  block4 = new Block(470,383,40,55);
  block5 = new Block(510,383,40,55);
  block6 = new Block(550,383,40,55);
  block7 = new Block(587,383,40,55);

  block8 = new Block(390,320,40,55);
  block9 = new Block(430,320,40,55);
  block10 = new Block(470,320,40,55);
  block11 = new Block(510,320,40,55);
  block12 = new Block(550,320,40,55);

  block13 = new Block(430,255,40,55);
  block14 = new Block(470,255,40,55);
  block15 = new Block(510, 255,40,55);

  block16 = new Block(470,200,40,55);

  block17 = new Block(790,200,40,55);
  block18 = new Block(830,200,40,55);
  block19 = new Block(870,200,40,55);
  block20 = new Block(910,200,40,55);
  block21 = new Block(950,200,40,55);

  block22 = new Block(830,140,40,55);
  block23 = new Block(870,140,40,55);
  block24 = new Block(910,100,40,55);

  block25 = new Block(870,50,40,55);

  sling = new Slingshot(this.polygon,{x:150,y:100});

  
}

function draw() {
  background(400,200,200); 
  text(mouseX+","+mouseY, 30,30)
  Engine.update(engine);

  imageMode(CENTER);
  image(polyImg,polygon.position.x,polygon.position.y,40,40);

  ground.display();

  ground1.display();
  ground2.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
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

  sling.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}