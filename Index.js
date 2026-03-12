
// setup()
/*******************************************************/


function setup() {

  // Canvas
  createCanvas(380, 600);

  // create group
  blockGroup = new Group();


  // ----- TOP BLOCKS -----
  for (var i = 0; i < 6; i++) {

    var block = new Sprite(i * 60 + 40, 20, 60, 30);
    block.color = color(255, 203, 225);
    block.collider = 'static';
    blockGroup.add(block);

    block = new Sprite(i * 60 + 40, 50, 60, 30);
    block.color = color(249, 225, 171);
    block.collider = 'static';
    blockGroup.add(block);

    block = new Sprite(i * 60 + 40, 80, 60, 30);
    block.color = color(214, 229, 189);
    block.collider = 'static';
    blockGroup.add(block);
  }


  // ----- BOTTOM BLOCKS -----
  for (var i = 0; i < 6; i++) {

    var block = new Sprite(i * 60 + 40, 560, 60, 30);
    block.color = color(188, 216, 236);
    block.collider = 'static';
    blockGroup.add(block);

    block = new Sprite(i * 60 + 40, 530, 60, 30);
    block.color = color(220, 204, 236);
    block.collider = 'static';
    blockGroup.add(block);

    block = new Sprite(i * 60 + 40, 500, 60, 30);
    block.color = color(255, 218, 180);
    block.collider = 'static';
    blockGroup.add(block);
  }


  // ----- WALLS -----
  wallLH  = new Sprite(0, height/2, 8, height, 'k');
  wallLH.color = 'black';

  wallRH  = new Sprite(width, height/2, 8, height, 'k');
  wallRH.color = 'black';

  wallTop = new Sprite(width/2, 0, width, 8, 'k');
  wallTop.color = 'black';

  wallBot = new Sprite(width/2, height, width, 8, 'k');
  wallBot.color = 'black';


  // ----- BALL -----
  ball_1 = new Sprite(width/2, height/4, 40, 'd');
  ball_1.color = 'cyan';
  ball_1.vel.x = 2;
  ball_1.vel.y = 2;
  ball_1.bounciness = 1;
  ball_1.friction = 0;
  ball_1.drag = 0;

}


/*******************************************************/
// draw()
/*******************************************************/
function draw() {

  background('lightgrey');

  // bounce off blocks
  ball_1.collides(blockGroup);

  // remove blocks when touched
  ball_1.collides(blockGroup, hitBlock);

  if (blockGroup.length === 0) {
    createBlocks(); // recreate all blocks
    ball_1.pos.x = width/2;  // reset ball
    ball_1.pos.y = height/4;
    ball_1.vel.x = random([-2, 2]);
    ball_1.vel.y = 2;
  }
function hitBlock(ball, block) {
  block.remove();   // block disappears
}
}

/*******************************************************/
//  END OF APP
/*******************************************************/