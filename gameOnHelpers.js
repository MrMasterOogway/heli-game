function moveHelicopter() {
  // Move Helicopter
  if (mouseIsPressed) {
    heli.y -= 3;
  } else {
    heli.y += 5;
  }
}

function moveWalls() {
  // Speed up walls every 100 points
  if (score % 100 == 0) {
    wallSpeed += 1;
  }

  // Move Walls & Teleport to right side if off left side
  wall1.x -= wallSpeed;
  if (wall1.x + wall1.w < 0) {
    wall1.x = width;
    wall1.y = random(50, height - 150);
  }

  wall2.x -= wallSpeed;
  if (wall2.x + wall2.w < 0) {
    wall2.x = width;
    wall2.y = random(50, height - 150);
  }

  wall3.x -= wallSpeed;
  if (wall3.x + wall3.w < 0) {
    wall3.x = width;
    wall3.y = random(50, height - 150);
  }


  wall4.x -= wallSpeed;
  if (wall4.x + wall4.w < 0) {
    wall4.x = width;
    wall4.y = random(50, height - 150);
  }
}

function checkCollision() {
if (shield > 0) {
  text("Shield", width / 2, height / 2);
    if (heli.y - 20.5 < 50 || heli.y + 23 > height - 50) {
      shield = shield - 1;
  }

  // Check for collision with the walls
  if (heli.x + 34 > wall1.x && heli.x - 34 < wall1.x + wall1.w &&
    heli.y + 20.5 > wall1.y && heli.y - 20.5 < wall1.y + wall1.h) {
    shield = shield - 1;
    wall1.y = wall1.y + 1000;
  }

  if (heli.x + 34 > wall2.x && heli.x < wall2.x + wall2.w &&
    heli.y + 20.5 > wall2.y && heli.y - 20.5 < wall2.y + wall2.h) {
    shield = shield - 1;
    wall2.y = wall2.y + 1000;
  }

  if (heli.x + 34 > wall3.x && heli.x < wall3.x + wall3.w &&
    heli.y + 20.5 > wall3.y && heli.y + 20.5 < wall3.y + wall3.h) {
    shield = shield - 1;
    wall3.y = wall3.y + 1000;
  }
  }
  
  if (nuke == 1) {
    text("Nuke", width / 2, height / 2);
    wall1.y = wall1.y + 1000;
    wall2.y = wall2.y + 1000;
    wall3.y = wall3.y + 1000;
    nuke = 0;
  }
  
  if (slowwalls == 1) {
    text("Slow", width / 2, height / 2);
    wallSpeed = 2;
    slowwalls = 0;
  }
  
  // Check for collision w/ ceiling & floor
  if (heli.y - 20.5 < 50 || heli.y + 23 > height - 50) {
    gameState = "gameOver"
    gameOverTimer = frameCount;
  }

  // Check for collision with the walls
  if (heli.x + 34 > wall1.x && heli.x - 34 < wall1.x + wall1.w &&
    heli.y + 20.5 > wall1.y && heli.y - 20.5 < wall1.y + wall1.h) {
    gameState = "gameOver"
    gameOverTimer = frameCount;
  }

  if (heli.x + 34 > wall2.x && heli.x < wall2.x + wall2.w &&
    heli.y + 20.5 > wall2.y && heli.y - 20.5 < wall2.y + wall2.h) {
    gameState = "gameOver"
    gameOverTimer = frameCount;
  }

  if (heli.x + 34 > wall3.x && heli.x < wall3.x + wall3.w &&
    heli.y + 20.5 > wall3.y && heli.y + 20.5 < wall3.y + wall3.h) {
    gameState = "gameOver"
    gameOverTimer = frameCount;

  }

  if (heli.x + 34 > wall4.x && heli.x < wall4.x + wall4.w &&
    heli.y + 20.5 > wall4.y && heli.y + 20.5 < wall4.y + wall4.h) {
    wall4.y = wall4.y + 1000;
    itembox();
  }

}

function drawGameOn() {
  // DRAWING
  background(0);
  noStroke();
  fill(0, 0, 255)
  rect(0, 0, width, 50); // Ceiling
  rect(0, height - 50, width, 50); //Floor
  rect(wall1.x, wall1.y, wall1.w, wall1.h); // Wall 1
  rect(wall2.x, wall2.y, wall2.w, wall2.h); // Wall 2
  rect(wall3.x, wall3.y, wall3.w, wall3.h); // Wall 3
  fill(120, 79, 209)
  rect(wall4.x, wall4.y, wall4.w, wall4.h); // Wall 4
  if (shield == 1) {
    text("Shield", width / 2, height / 2);
    
  }
  if (nuke == 1) {
    text("Shield", width / 2, height / 2);
    
  }
  if (shield == 1) {
    text("Shield", width / 2, height / 2);
    
  }
  if (shield == 1) {
    text("Shield", width / 2, height / 2);
    
  }
  image(heli.img, heli.x, heli.y) // Helicopter
  fill(255);
  text("score: " + score, width / 20, height - 10);
  text("Best Score: " + best, width / 2, height - 10);
}
