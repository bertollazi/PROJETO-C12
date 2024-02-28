var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //loadImage (carregarImagem) da pista)
  //loadAnimation (carregarAnimação) de corrida para o menino
 boyImg=loadAnimation("Runner-1.png", "Runner-2.png");
 pathImg=loadImage("path.png");


}

function setup(){
  
  createCanvas(400,400);
//pista=createSprite(250,300,200,300);
//adicione uma imagem para a pista
path= createSprite(200,300,200,300);
path.addImage(pathImg);
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.
path.scale=1.2;
path.velocityY = 5;

//crie um sprite de menino
boy= createSprite(200,200,200,200);
//adicione uma animação de corrida para ele
boy.addAnimation("tygra",boyImg);
boy.scale=0.1;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible= false;
//defina visibilidade como falsa para o limite à esquerda

//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible= false;
//defina visibilidade como falsa para o limite à direita
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // mover o menino com o mouse usando mouseX
  boy.x = World.mouseX
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  boy.collide(edges);
  
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
