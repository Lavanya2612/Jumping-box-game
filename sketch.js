var canvas;
var music;
var box1, box2, box3, box4, mainBox
var edges

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    mainBox= createSprite(random(20, 750), 50, 50, 50)
    mainBox.shapeColor= 'white'
    mainBox.velocityY=4
    mainBox.velocityX=3
   // mainBox.debug= true
    
    box1= createSprite(90, 550, 150, 30)
    box1.shapeColor= 'blue'
    //box1.debug= true

    box2= createSprite(290, 550, 150, 30)
    box2.shapeColor= 'orange'
   // box2.debug= true

    box3= createSprite(480, 550, 150, 30)
    box3.shapeColor= 'red'
    //box3.debug= true

    box4= createSprite(680, 550, 150, 30)
    box4.shapeColor= 'green'
    //box4.debug= true

}

function draw() {
    background(rgb(169,169,169));
    
    edges = createEdgeSprites();
    
     mainBox.bounceOff(edges)

     if (isTouching(box1, mainBox)){
         mainBox.bounceOff(box1)
         music.play();
         mainBox.shapeColor= 'blue'
        }

    if (isTouching(box2, mainBox)){
        music.play();
        mainBox.bounceOff(box2)
        mainBox.shapeColor= 'orange'
    }

    if (isTouching(box3, mainBox)){
        mainBox.bounceOff(box3)
        music.play();
        mainBox.shapeColor= 'red'
       }

    if (isTouching(box4, mainBox)){
        mainBox.bounceOff(box4)
        music.play();
        mainBox.shapeColor= 'green'
     }


drawSprites()
  
    }
    
