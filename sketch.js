var movingRect, fixedRect, g1, g2;

function setup() {
  createCanvas(1200,800);
 fixedRect =  createSprite(600, 400, 50, 80);
 fixedRect.shapeColor = ("pink");

 movingRect =  createSprite(400, 200, 80, 30);
 movingRect.shapeColor = ("blue");

 g1 = createSprite(200,100,50,50);
 g1.shapeColor = ("white");

 g2 = createSprite(300,100,50,50);
 g2.shapeColor = ("brown");

}

function draw() {
  background(0);
  
  
  movingRect.x= World.mouseX;
  movingRect.y= World.mouseY;

 if(isTouching(movingRect,g1)){
  movingRect.shapeColor = ("red");
 g1.shapeColor = ("purple");
 }

 else{
  g1.shapeColor = ("pink"); 
  movingRect.shapeColor = ("blue");
 }

    drawSprites();
}

