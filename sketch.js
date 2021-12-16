var fundo, imgFundo
var imgRato1, imgRato2, imgRato3, imgRato4, imgGato1, imgRato2, imgRato3, imgRato4
var gato, gato2, rato, rato2

function preload() {
    imgFundo = loadImage("images/garden.png");
    imgRato1 = loadImage("images/mouse1.png");
    imgRato2 = loadImage("images/mouse2.png");
    imgRato3 = loadImage("images/mouse3.png");
    imgRato4 = loadImage("images/mouse4.png");
    imgGato1 = loadImage("images/cat1.png");
    imgGato2 = loadAnimation("images/cat2.png","images/cat3.png");
    
}


function setup() {
    createCanvas(windowWidth, windowHeight);
    rato = createSprite(100, 580);
    rato.addImage("queijo", imgRato1);
    rato.addImage("queijo2", imgRato2);
    rato.addImage("queijo3", imgRato3);
    rato.addImage("queijo4", imgRato4);
    rato.scale = 0.1;

    gato = createSprite(1000, 600);
    gato.addImage("miau", imgGato1);
    //gato.addImage("miau3", imgGato3);
    //gato.addAnimation("miau2", imgGato2);
    //gato.addAnimation("miau4", imgGato4);
    gato.scale = 0.1;
}

function draw() {
    background(imgFundo);

   
    if (gato.isTouching(rato)) {
        gato.velocityX = 0;
        gato.changeAnimation("miau");
        rato.changeAnimation("queijo3");
        gato.scale=0.1;

    }

    drawSprites();
}


function keyPressed() {

    if (keyDown("left")) {
        gato.velocityX = -5;
        gato.addAnimation("miau2", imgGato2);
        gato.changeAnimation("miau2");
        gato.scale=0.15;
    }


}
