const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var ground;
var ball;
var button;
var rotater1;
var angle=45;

function setup() {
  createCanvas(400, 400);
  //creation our own engine
  engine = Engine.create();
  world = engine.world;

  //   console.log(world)

  var ground_option = {
    isStatic: true,
  };

  var ball_option = {
    frictionAir: 0.05,
    restitution: 1,
  };

  ground = Matter.Bodies.rectangle(200, 360, 400, 10, ground_option);
  World.add(world, ground);

  ball = Matter.Bodies.circle(200, 50, 20, ball_option);
  World.add(world, ball);

  button = createImg("up.png");
  button.size(50, 50);
  button.position(20, 50);
  button.mouseClicked(vforce);

  rotater1 = Matter.Bodies.rectangle(250, 100, 10, 80, ground_option);
  World.add(world, rotater1);
  // console.log(ground.position.y)
}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 10);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);

  push();
  fill("red");
  translate(rotater1.position.x, rotater1.position.y);
 rotate(angle)
  rectMode(CENTER);
  rect(0, 0, 10, 80);
  angle+=0.1;
  pop();
}

function vforce() {
  Matter.Body.applyForce(ball, ball.position, { x: -0.1, y: 0 });
}
