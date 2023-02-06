var ball;
var ball1;
var vx = 2;
var vy = 2;
function setup() {
  createCanvas(400,400);

  ball = createSprite(100,100,100,100);
  ball1 = createSprite(200,200,100,100);
}

function draw() 
{
  background(51);
  if(ball.position.x<=0 || ball.position.x>=width)
  {
    vx= -vx;
  }
  ball.velocity.x = vx;
if (ball1.position.y<=0 || ball1.position.y>=width)
{
  vy = -vy;
}
ball1.velocity.y = vy;
  drawSprites();

}

