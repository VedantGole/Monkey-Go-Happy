//declaring Gloal Variables
var monkey , monkey_running, ground, bananaGroup, obstacleGroup;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var survivalTime;

function preload(){
  
  //loading all Animations and Images
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(600, 300);
  
  //creating Monkey
  monkey = createSprite(46, 232, 100, 100);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  //Making the ground
  ground = createSprite(monkey.x + 255, monkey.y + 35, 600, 10);
  ground.velocityX = 
  
  //creating Groups  
  obstacleGroup = new Group();
  bananaGroup = new Group();

  //Adding a survival time
  survivalTime = 0;
}


function draw() {
  background("lightgreen");
  
  //Making the monkey jump, if Spacebar is pressed
  if(keyDown("space") && monkey.collide(ground) == true){
    monkey.velocityY = -15;
  }
  
  //Defining Gravity
  monkey.velocityY = monkey.velocityY + 0.8;
  
  //Colliding Monkey with the ground
  monkey.collide(ground); 
  
  //calling the createObstacle function
  createObstacles();
  
  //calling the createFood function
  createFood();
  
  //Adding the TIme survived
  stroke("black");
  fill("black");
  textSize(20);
  text("Survival Time: " + survivalTime + " sec", 225, 50);
  survivalTime = Math.ceil(frameCount/frameRate());
  
  
  //drawing the sprite 
  drawSprites();
}

//adding a function to create Obstacles
function createObstacles() {
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(600,245,10,40);
    obstacle.velocityX = -6;
    obstacle.addImage(obstacleImage);
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
    obstacleGroup.add(obstacle);
  }
}

//Adding a function to create Food
function createFood(){
  if(frameCount % 80 == 0){
    var Food = createSprite(600, Math.round(random(120, 200)), 40, 40);
    Food.scale = 0.1;
    Food.velocityX = -4;  
    Food.addImage(bananaImage);
  }
}




