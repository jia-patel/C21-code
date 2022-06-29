const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var BTN1,BNT2,ball;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  BTN1 = createImg("right.png")
  BTN1.position(220,30)
  BTN1.size(50,50)
  BTN2.mouseClicked(vforce)
  BTN2 = createImg(up.png)
  BTN2.position(20,30)
  BTN2.size(50,50)
  BTN2.mouseClick(vforce)
  var ball_options = {
    restitution:0.95
  }
  ball = Bodies.circle(200,100,20,ball_options)
World.add(world,ball)
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20)
}

function edgeforce() {
Matter.Bodies.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}

function vforce() {
  Matter.Bodies.applyForce(ball,{x:0,y:0},{x:0.05,y:-0.05})
  }
