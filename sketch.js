backgroundImg;
function setup() {
  createCanvas(800,400);

  backgroundImg = loadImage("snow1.jpg");
}

function draw() {
  background(backgroundImg); 
  if(frameCount&60===0){
    Snow.push(new Snow(random(0,800),0))
  } 
  for (var k = 0; k < Snow.length; k++){
    Snow[k].display();
  }
  drawSprites();

}