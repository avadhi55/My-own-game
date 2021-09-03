var pc,edges;
var monster1;
var wallGroup, tunnelGroup;
var B1Img,B2Img,B3Img,B4Img,B5Img,B6Img,digger;
var block;

function preload (){
  B1Img = loadImage("Images/block.1.png");
  B2Img = loadImage("Images/block.2.png");
  B3Img = loadImage("Images/block.3.png");
  B4Img = loadImage("Images/block.4.png");
  B5Img = loadImage("Images/block.5.png");
  B6Img = loadImage("Images/block.6.png");
  M1Img = loadImage("Images/monster.1-.png");
  M2Img = loadImage("Images/monster.2-.png");
  M3Img = loadImage("Images/monster.3-.png");
  M4Img = loadImage("Images/monster.4-.png");
  M5Img = loadImage("Images/monster.5-.png");
  M6Img = loadImage("Images/monster.6-.png");
  digger= loadImage("Images/DiggerImage.png");
}

function setup() {
  createCanvas(1520,750);

  tunnelGroup = new Group();
  //1 row
  block1 = new Tunnel(180,50,1,"success","silver",3);
  block2 = new Tunnel(330,50,3,"fail",0,0);
  block3 = new Tunnel(480,50,4,"fail",0,0);
  block4 = new Tunnel(630,50,5,"fail",0,0);
  block5 = new Tunnel(780,50,3,"success","silver",0);
  block6 = new Tunnel(930,50,2,"success","gold",2);
  block7 = new Tunnel(1080,50,5,"success","silver",0);
  block8 = new Tunnel(1230,50,1,"success","gold",1);
  block9 = new Tunnel(1380,50,2,"success","silver",0);

  //2 row
  block10= new Tunnel(40,200,2,"fail",0,0);
  block11= new Tunnel(180,200,5,"success","gold",4);
  block12= new Tunnel(330,200,4,"fail",0,0);
  block13= new Tunnel(480,200,2,"fail",0,0);
  block14= new Tunnel(630,200,3,"success","silver",5);
  block15 = new Tunnel(780,200,1,"fail",0,0);
  block16 = new Tunnel(930,200,5,"success","silver", 0);
  block17 = new Tunnel(1080,200,2,"success","silver", 0);
  block18 = new Tunnel(1230,200,1,"fail",0,0);
  block19 = new Tunnel(1380,200,2,"success","gold", 0);

  //3 row
  block25= new Tunnel(40,350,3,"success","silver", 0);
  block26= new Tunnel(180,350,4,"success","gold",6);
  block27= new Tunnel(330,350,5,"fail",0,0);
  block28= new Tunnel(480,350,2,"success","silver",4);
  block29= new Tunnel(630,350,5,"success","silver", 0);
  block30 = new Tunnel(780,350,1,"fail",0,0);
  block31 = new Tunnel(930,350,2,"success","silver",3);
  block32 = new Tunnel(1080,350,1,"fail",0,0);
  block33 = new Tunnel(1230,350,3,"success","silver",2);
  block34 = new Tunnel(1380,350,5,"fail",0,0);

  //4 row
  block35 = new Tunnel(40,500,1,"success","silver", 0);
  block36 = new Tunnel(180,500,5,"fail",0,0);
  block37 = new Tunnel(330,500,2,"success","silver",1);
  block38 = new Tunnel(480,500,4,"success","gold", 0);
  block39 = new Tunnel(630,500,5,"success","gold", 0);
  block20 = new Tunnel(780,500,5,"fail",0,0);
  block21 = new Tunnel(930,500,3,"fail",0,0);
  block22 = new Tunnel(1080,500,3,"success","gold",6);
  block23 = new Tunnel(1230,500,1,"fail","silver", 0);
  block24 = new Tunnel(1380,500,5,"success","gold", 0);

  //5 row
  block40 = new Tunnel(40,650,2,"success","silver", 0);
  block41 = new Tunnel(180,650,3,"fail",0,0);
  block42 = new Tunnel(330,650,1,"success","silver",5);
  block43 = new Tunnel(480,650,4,"fail",0,0);
  block44 = new Tunnel(630,650,5,"success","silver", 0);
  block45 = new Tunnel(780,650,5,"success","silver",4);
  block46 = new Tunnel(930,650,2,"fail",0,0);
  block47 = new Tunnel(1080,650,4,"success","silver", 0);
  block48 = new Tunnel(1230,650,2,"success","silver", 0);
  block49 = new Tunnel(1380,650,1,"fail",0,6);
  
  edges = createEdgeSprites();

 
  pc = new Digger();
}

function draw() {
  background(74,20,0); 
  
  pc.move();
  pc.hit();

  block1.changeImages();
  block2.changeImages();
  block3.changeImages();
  block4.changeImages();
  block5.changeImages();
  block6.changeImages();
  block7.changeImages();
  block8.changeImages();
  block9.changeImages();
  block10.changeImages();
  block11.changeImages();
  block12.changeImages();
  block13.changeImages();
  block14.changeImages();
  block15.changeImages();
  block16.changeImages();
  block17.changeImages();
  block18.changeImages();
  block19.changeImages();
  block20.changeImages();
  block21.changeImages();
  block22.changeImages();
  block23.changeImages();
  block24.changeImages();
  block25.changeImages();
  block26.changeImages();
  block27.changeImages();
  block28.changeImages();
  block29.changeImages();
  block30.changeImages();
  block31.changeImages();
  block32.changeImages();
  block33.changeImages();
  block34.changeImages();
  block35.changeImages();
  block36.changeImages();
  block37.changeImages();
  block38.changeImages();
  block39.changeImages();
  block40.changeImages();
  block41.changeImages();
  block42.changeImages();
  block43.changeImages();
  block44.changeImages();
  block45.changeImages();
  block46.changeImages();
  block47.changeImages();
  block48.changeImages();
  block49.changeImages();
  
  drawSprites();
}