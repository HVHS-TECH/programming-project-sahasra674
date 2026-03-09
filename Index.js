/*******************************************************/
function setup() {
	
console.log("JS is working");
  // Now the width and height of the canvas keep changing
width = random(600,600);
height = random(600,600);

cnv = new Canvas(width, height);

  // Rectangle sprite
  box = new Sprite(200, 150, 120, 60);
  box.color = 'orange';
  box.rotationSpeed = 2;
  box.vel.x = 2;
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	 // Background colour
  background('lightgrey');


};


/*******************************************************/
//  END OF APP
/*******************************************************/