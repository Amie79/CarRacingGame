var canvas, backgroundImage, database;
var position;
var gameState=0;
var playerCount=0;
var form, player, game;

function setup(){
  database = firebase.database();
  console.log(database);
 
 canvas= createCanvas(400,400);
 game=new Game();
 game.getState();
 game.start();
}
function draw(){
  background("white");
  
}