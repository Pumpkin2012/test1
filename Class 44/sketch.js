var player, playerImg
var island, islandImg
var PLAY=1, END=0
var gameState = PLAY
var gameOver, gameOverImg
var restart, restartImg

function preload(){
  playerImg = loadImage("player.png")
  islandImg = loadImage("island.png")
  gameOverImg = loadImage("gameover.png")
  restartImg = loadImage("restart.png")
}

function setup(){
createCanvas(500,500)

player = createSprite(150,250,20,20)
player.addImage("player",playerImg)
player.scale = 0.5


island = createSprite(150,400,300,15)
island.addImage("island",islandImg)
island.scale = 0.8
island.setCollider("rectangle",0,0,100,60);



gameOver = createSprite(250,100,50,50);
gameOver.addImage("Game over", gameOverImg);
gameOver.scale = 0.8


restart = createSprite(250,250,50,50);
restart.addImage("restart", restartImg);
restart.scale = 0.4
}

function draw(){
background(50);
console.log("this is: ", gameState)
if (gameState==PLAY){
player.collide(island)
player.velocityY = player.velocityY + 0.15

if (keyDown("LEFT_ARROW")){
  player.x=player.x-5
}
if (keyDown("RIGHT_ARROW")){
  player.x=player.x+5
}
if (keyDown("SPACE")){
  player.velocityY=-5
}
gameOver.visible = false
restart.visible = false
if (player.y>500){
  gameState = END
}

drawSprites();
}
if (gameState==END){
  gameOver.visible = true
  restart.visible = true
}}
