
// setup()
/*******************************************************/


// Select the button by its ID
const button = document.getElementById("myButton");

// Add a click event listener
button.addEventListener("click", () => {
    alert("Hello! You clicked the button.");
});



function setup() {
	console.log("setup: ");

    alert("connect Js");
  
cnv = new Canvas(600, 500);
  
// script.js
console.log("JavaScript file is connected!");

 // Create your sprite
 box = new Sprite(200, 150, 120, 60,'d');
  box.color = 'orange';

  //wall
wallLH  = new Sprite(0, height/2, 8, height, 'k');
wallLH.color = 'black';

wallRH  = new Sprite(width, height/2, 8, height, 'k');
wallRH.color = 'black';

wallTop = new Sprite(width/2, 0, width, 8, 'k');
wallTop.color = 'black';

wallBot = new Sprite(width/2, height, width, 8, 'k');
wallBot.color = 'black';
 
}
 
/*******************************************************/
// draw()
/*******************************************************/
function draw() {

  background('lightgrey');

  if (kb.pressing('left')) {
box.vel.x = -5;
}

else if (kb.pressing ('right')) {
box.vel.x = 5; 
};

if (kb.released('left')) {
  box.vel.x = 0; 
}

if (kb.released('right')) {
  box.vel.x = -0; 
}
  
}

/*******************************************************/
//  END OF APP
/*******************************************************/