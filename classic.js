function setup() {
	console.log("setup: ");

	cnv = new Canvas(500, 600);2

wallLH = new Sprite(0, height/2, 8, height, 'k');
wallLH.color = 'black';

wallRH = new Sprite(width, height/2, 8, height, 'k');
wallRH.color = 'black';

wallTop = new Sprite(width/2, 0, width, 8, 'k');
wallTop.color = 'black';

wallBot = new Sprite(width/2, height, width, 8, 'k');
wallBot.color = 'black';


ball_1 = new Sprite(width/2, height/2, 50, 'd');
ball_1.color = 'cyan';
ball_1.vel.y = 2 
ball_1.vel.x = 2;
ball_1.bounciness = 1;
ball_1.friction = 0;
ball_1.drag = 0;

//alienGroup = new Group();

for (i = 0; i < 5; i++) {
  alien = new Sprite(i * 60 + 40, 20, 60, 30);
  //alien.color = color(255, 203, 225);
//alienGroup.add(alien);
//alienGroup = new Group();
}
}




/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('lightgrey');

  // Register a callback:
// if any alien in alienGroup collides with ball_1, call func2Call
alienGroup.collides(ball_1, func2Call);

function func2Call(_alien, _ball_1) {

// Delete the alien which was hit
_alien.remove();

}
}

/*******************************************************/
//  END OF APP
/*******************************************************/