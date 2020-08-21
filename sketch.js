var obstacle_group,banana_group,backGround,score;

var monkey,backGround1bananaImage,obstacleImage;


function preload(){
monkeyImg=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
backGroundImg=loadImage("jungle.png");
  
  

  
 bananaImage=loadImage("banana.png"); 
  
 obstacleImage=loadImage("stone.png"); 
}

function setup() {
  createCanvas(800, 400);
  
  
  
  backGround=createSprite(50,180,800,400);
  backGround.addImage("Img",backGroundImg);
  backGround.scale=2;
  backGround.velocityX=-0.8;
  
  
  
  
  
  monkey=createSprite(50,340);
  monkey.addAnimation("Img",monkeyImg);
  monkey.scale=0.10
  
  ground=createSprite(400,392,800,2);
  ground.visible=false;
  
  
  obstacle_group=new Group();
  banana_group=new Group();
  
  score=0;
}

function draw() {
 background(180);
  if(keyDown("space")&&monkey.collide(ground)){
     monkey.velocityY=-16.8;
     }
  
  monkey.collide(ground);
  monkey.velocityY=monkey.velocityY+1;
  
  if(backGround.x<290){
  backGround.x=width/2     
     }
  
  
  if(banana_group.isTouching(monkey)){
     score=score+1;
    banana_group.destroyEach(); 
     }
  
  if(obstacle_group.isTouching(monkey)){
     monkey.scale=0.08;
     }
  
     
     
  switch(score){
     case 10 :monkey.scale=0.12;
       break;
       case 20 :monkey.scale=0.14;
       break;
       case 30 :monkey.scale=0.16;
       break;
       case 40 :monkey.scale=0.18;
       break;
       
   }
  
  
  
  drawSprites();
  spwanBanana();
  spwanObstacles();
  textSize(25);
  text("Score: "+score,600,50);
}

function spwanBanana(){
 if (World.frameCount %180 === 0) {
   
   
    var banana = createSprite(800,50,40,10);
   banana.addImage("a",bananaImage);
    banana.y = Math.round(random(180,250));
    banana.scale = 0.08;
    banana.velocityX = -3;
    
   
   
     //assign lifetime to the variable
    banana.lifetime = 260 ;
    
    //adjust the depth
    
   //grapes
   banana_group.add(banana);
    
  }

}
function spwanObstacles(){
 if (World.frameCount %210 === 0) {
   
   
    var obstacle = createSprite(800,375,40,10);
   obstacle.addImage("b",obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -6.5;
    
     //assign lifetime to the variable
   obstacle.lifetime = 260 ;
    
    //adjust the depth
    
   //grapes
  obstacle_group.add(obstacle);
    
  }
  
}


function forest(){
if(backGround.x<390){
  backGround1=createSprite(400,200,800,400);
  backGround1.addImage("Image",backGroundImage);
  backGround1.scale=1.4;     
     }
}