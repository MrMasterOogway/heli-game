// P5.JS TEMPLATE

// declare Global Variables
var heli = {};
var gameState;
var gameOverTimer;
var wall1, wall2, wall3, wall4, wallSpeed;
var score;
var best = 0;
var best1 = 0;
var best2 = 0;
var best3 = 0;
var best4 = 0;
var best5 = 0;
var name;
var name1 = "guy";
var name2 = "guy";
var name3 = "guy";
var name4 = "guy";
var name5 = "guy";
var leader1;
var leader2;
var leader3;
var leader4;
var leader5;
var stahp = 0;
var shield = 0;
var nuke = 0;
var slowwalls = 0;
var jackpot = 0;

// Preload Function - Runs and completes before setup()
function preload() {
  heli.img = loadImage("assets/heliBlueTransparent.png");
}

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
  createCanvas(800, 600);
  initialize();
  imageMode(CENTER);
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
  if (gameState == "start") {
    drawStartScreen();
  } else if (gameState == "gameOn") {
    gameOn();
  } else if (gameState == "gameOver") {
    gameOver();
  }
}

// Event Functions
function mousePressed() {
  if (gameState == "start") {
    gameState = "gameOn";
  } else if (gameState == "gameDone") {
    initialize();
  }
}
