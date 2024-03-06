var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var obstacleTop, obsTop1, obsTop2
var obstacleBottom, obsBottom1, obsBottom2, obsBottom3

function preload(){
bgImg = loadImage("assets/bg.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")

}

function setup(){

  createCanvas(400,400)
//imagen de fondo
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3


//creando los terrenos superior e inferior
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creando el globo 
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;



}

function draw() {
  
  background("black");
        
          //haciendo que el globo aerostático brinque
          if(keyDown("space")) {
            balloon.velocityY = -6 ;
            
          }

          //agregando la gravedad
           balloon.velocityY = balloon.velocityY + 2;

           
          Bar();
   
        drawSprites();
       
        //generando los obstáculos superiores
      spawnObstaclesTop();

      
}


function spawnObstaclesTop() 
{
      if(World.frameCount % 60 === 0) {
        obstacleTop = createSprite(400,50,40,50);
    
    //obstacleTop.addImage(obsTop1);

    //posiciones "y" aleatorias para los obstáculos superiores
    

    //generar obstáculos superiores de forma aleatoria 


     //asignando lifetime (tiempo de vida) a la variable
   
   //profundidad 
  
   
      }
}

 function Bar() 
 {

}


  
