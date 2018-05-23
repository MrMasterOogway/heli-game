function initialize() {
  // Initialize Global Variables
  heli.x = 100;
  heli.y = height / 2;
  gameState = "start"; // or "gameOn" or "gameOver"
  wall1 = {
    x: 500,
    y: random(50, height - 150),
    w: 50,
    h: 100
  };
  wall2 = {
    x: 800,
    y: random(50, height - 150),
    w: 50,
    h: 100
  };
  wall3 = {
    x: 1100,
    y: random(50, height - 150),
    w: 50,
    h: 100
  };
  wall4 = {
    x: 1800,
    y: random(50, height - 150),
    w: 50,
    h: 50,
  };
  wallSpeed = 3;
  score = 0;
  text("Best Score: " + best, width / 2, height - 10);
}

function drawStartScreen() {
  background(0);
  noStroke();
  fill(0, 0, 255)
  rect(0, 0, width, 50); // Ceiling
  rect(0, height - 50, width, 50); //Floor
  image(heli.img, heli.x, heli.y) // Helicopter
  fill(255);
  textSize(42);
  text("CLICK TO START!", width / 2, height / 2);
  text("Best Score: " + best, width / 2, height - 10);
  stahp = 0;
  score = 0;
}

function gameOn() {
  // LOGIC
  score++;
  moveHelicopter();
  moveWalls();
  checkCollision();
  drawGameOn();
  text("Best Score: " + best, width / 2, height - 10);
}

function gameOver() {
  bestscore();
}

function bestscore() {
  if (stahp < 1) {
    stahp = 1
    name = prompt("Enter your name:");
  }
  if (score > best) {
    best = score;
  }
  gameState = "leaderboard"
  leaderboard();
}

function leaderboard() {
  if (score > best1) {
    leader1 = (name + ": " + score)
    leader2 = (name1 + ": " + best1)
    leader3 = (name2 + ": " + best2)
    leader4 = (name3 + ": " + best3)
    leader5 = (name4 + ": " + best4)

    text("Leaderboards", width - 600, height - 500);
    text("HISCORE1: " + leader1, width - 600, height - 450);
    text("HISCORE2: " + leader2, width - 600, height - 400);
    text("HISCORE3: " + leader3, width - 600, height - 350);
    text("HISCORE4: " + leader4, width - 600, height - 300);
    text("HISCORE5: " + leader5, width - 600, height - 250);

    name5 = name4
    name4 = name3
    name3 = name2
    name2 = name1
    name1 = name

    best5 = best4
    best4 = best3
    best3 = best2
    best2 = best1
    best1 = score


  } else if (score > best2) {
    leader1 = (name1 + ": " + best1)
    leader2 = (name + ": " + score)
    leader3 = (name2 + ": " + best2)
    leader4 = (name3 + ": " + best3)
    leader5 = (name4 + ": " + best4)

    text("Leaderboards", width - 600, height - 500);
    text("HISCORE1:" + leader1, width - 600, height - 450);
    text("HISCORE2:" + leader2, width - 600, height - 400);
    text("HISCORE3:" + leader3, width - 600, height - 350);
    text("HISCORE4:" + leader4, width - 600, height - 300);
    text("HISCORE5:" + leader5, width - 600, height - 250);

    name5 = name4
    name4 = name3
    name3 = name2
    name2 = name
    name1 = name1

    best5 = best4
    best4 = best3
    best3 = best2
    best2 = score
    best1 = best1

  } else if (score > best3) {
    leader1 = (name1 + ": " + best1)
    leader2 = (name2 + ": " + best2)
    leader3 = (name + ": " + score)
    leader4 = (name3 + ": " + best3)
    leader5 = (name4 + ": " + best4)

    text("Leaderboards", width - 600, height - 500);
    text("HISCORE1:" + leader1, width - 600, height - 450);
    text("HISCORE2:" + leader2, width - 600, height - 400);
    text("HISCORE3:" + leader3, width - 600, height - 350);
    text("HISCORE4:" + leader4, width - 600, height - 300);
    text("HISCORE5:" + leader5, width - 600, height - 250);

    name5 = name4
    name4 = name3
    name3 = name
    name2 = name2
    name1 = name1

    best5 = best4
    best4 = best3
    best3 = score
    best2 = best2
    best1 = best1

  } else if (score > best4) {
    leader1 = (name1 + ": " + best1)
    leader2 = (name2 + ": " + best2)
    leader3 = (name3 + ": " + best3)
    leader4 = (name + ": " + score)
    leader5 = (name4 + ": " + best4)

    text("Leaderboards", width - 600, height - 500);
    text("HISCORE1:" + leader1, width - 600, height - 450);
    text("HISCORE2:" + leader2, width - 600, height - 400);
    text("HISCORE3:" + leader3, width - 600, height - 350);
    text("HISCORE4:" + leader4, width - 600, height - 300);
    text("HISCORE5:" + leader5, width - 600, height - 250);

    name5 = name4
    name4 = name
    name3 = name3
    name2 = name2
    name1 = name1

    best5 = best4
    best4 = score
    best3 = best3
    best2 = best2
    best1 = best1

  } else if (score > best5) {
    leader1 = (name1 + ": " + best1)
    leader2 = (name2 + ": " + best2)
    leader3 = (name3 + ": " + best3)
    leader4 = (name4 + ": " + best4)
    leader5 = (name + ": " + score)

    text("Leaderboards", width - 600, height - 500);
    text("HISCORE1:" + leader1, width - 600, height - 450);
    text("HISCORE2:" + leader2, width - 600, height - 400);
    text("HISCORE3:" + leader3, width - 600, height - 350);
    text("HISCORE4:" + leader4, width - 600, height - 300);
    text("HISCORE5:" + leader5, width - 600, height - 250);

    name5 = name
    name4 = name4
    name3 = name3
    name2 = name2
    name1 = name1

    best5 = score
    best4 = best4
    best3 = best3
    best2 = best2
    best1 = best1

  } else {
    leader1 = (name1 + ": " + best1)
    leader2 = (name2 + ": " + best2)
    leader3 = (name3 + ": " + best3)
    leader4 = (name4 + ": " + best4)
    leader5 = (name5 + ": " + best5)

    text("Leaderboards", width - 600, height - 500);
    text("HISCORE1:" + leader1, width - 600, height - 450);
    text("HISCORE2:" + leader2, width - 600, height - 400);
    text("HISCORE3:" + leader3, width - 600, height - 350);
    text("HISCORE4:" + leader4, width - 600, height - 300);
    text("HISCORE5:" + leader5, width - 600, height - 250);
  }
  gameState = "gameDone"
}

function itembox() {
  let dice = Math.random();
  let comeback = frameCount;
  
  if (dice < 0.2) {
    // 20%
    text("Shield", width / 2, height / 2);  
    console.log("shield")
    wall4.y = wall4.y + 1000;
    shield = shield + 1;
  
  } else if (dice < 0.3) {
    // 10%
  text("Nuke", width / 2, height / 2);
  console.log("nuke")
  wall4.y = wall4.y + 1000;
  nuke = 1;
  
  } else if (dice < 0.35) {
    // 5%
    text("Slow", width / 2, height / 2);
    console.log("slow")
    wall4.y = wall4.y + 1000;
    slowwalls = 1;
    
  
  }else if (dice < 0.3505) {
    // 0.05%
    console.log("pot")
    wall4.y = wall4.y + 1000;
    score = score + 5000;
    
  }else {
    // 64.05%
    console.log("points")
    wall4.y = wall4.y + 1000;
    score = score + 150;
  }
  
  if (comeback > 3000) {
    wall4.y = wall4.y - 1000;
  }
}
