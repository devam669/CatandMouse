var mouse, mouseImg,mouseLastImage
var cat, catImg,catImg2,catLastImage, catImg3
var garden, gardenImg
function preload() {
    //load the images here
    catImg=loadImage("cat1.png")
    gardenImg=loadImage("garden.png")
    mouseImg=loadImage("mouse1.png")
    catImg2=loadImage("cat2.png")
    catLastImage=loadImage("cat4.png")
    catImg3=loadImage("cat3.png")
    mouseLastImage=loadImage("mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    mouse=createSprite(350,400,20,20)
    cat=createSprite(800,400,20,20)

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x < (cat.width-mouse.width)/2)
    {
        cat.velocityX=0
        cat.addAnimation("catLastImage",catImg3)
        cat.changeAnimation("catLastImage")
        mouse.changeAnimation("mouseLastImage")
    }


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
cat.velcotiyX=-5
cat.addAnimation("catRunning",catImg2)
cat.changeAnimation("catRunning")
}



}
