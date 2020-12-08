var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	package1IMG=loadImage("package1.png")
	package2IMG=loadImage("package2.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	package1Sprite=createSprite(400, 80, 10,10);
	package1Sprite.addImage(package1IMG)
	package1Sprite.scale=0.2

	package2Sprite=createSprite(330, 80, 10,10);
	package2Sprite.addImage(package2IMG)
	package2Sprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10, 10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	line1=createSprite(width/2, height-50, 200, 20);
	line1=shapeColor=color("red");

	line2= createSprite(510, 610, 20, 100);
	line2=shapeColor("red");
	 
	line3= createSprite(310, 610, 20, 100);
	line3=shapeColor("red");
	
	engine = Engine.create();
	world = engine.world;

    packageBody = Bodies.circle(width/2 , 200 , 10 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	
	packageBody1 = Bodies.circle(width/2 , 200 , 10 , {restitution:3, isStatic:true});
	World.add(world, packageBody1);

	packageBody2 = Bodies.circle(width/2 , 200 , 15 , {restitution:3, isStatic:true});
	World.add(world, packageBody2);
    
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
  
  packageSprite1.x= packageBody1.position.x 
  packageSprite1.y= packageBody1.position.y 
 
  packageSprite2.x= packageBody2.position.x 
  packageSprite2.y= packageBody2.position.y

  packageSprite.collide(line1);
  packageSprite.collide(line2);
  packageSprite.collide(line3);
 
  packageSprite1.collide(line1);
  packageSprite1.collide(line2);
  packageSprite1.collide(line3);

  packageSprite2.collide(line1);
  packageSprite2.collide(line2);
  packageSprite2.collide(line3);

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
  Matter.Body.setStatic(packageBody, false); 
  }
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody1, false); 
  }
 if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(packageBody2, false); 
  }
}



