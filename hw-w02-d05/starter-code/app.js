$(function(){

console.log('app.js connected!');

var west = $('#yeezy');
var bush = $('#george');
var public = $('#approval');
var body = $('body');

//create a function that moves the target to the right of the screen
function moveOver () {
  public.animate({marginLeft: '700px'}, 5000); //moving the image to have a margin of 800px over 5000 milliseconds
  console.log('slide public');
}

// create a function that will move the two characters over
function playerMoves(event){
  if (event.which==39){ //key pressing the z
    west.css({"marginLeft": '+=7px'}, 200);
    console.log('move kanye');
  }
  if (event.which==90){//key pressing the right arrow
    bush.css({'marginLeft': '+=7px'}, 200);
    console.log('move bush');
  }
}

//create a function to alert the winner when arriving at the target
//the below function is not actually working
function winner(){
  var position0 = '700px';
  var position1 = west.css.marginLeft;
  var position2 = bush.css.marginLeft;
  // var left0 = public.css('margin-left');
  if (position0 = position1){
    console.log('kanye wins');
    alert('KANYE WINS!')}
  if (position0 = position2){
    console.log('w. is for winner');
    alert('W. IS FOR WINNER!');
    }
  }

moveOver(); // moves the target to the right of the screen on load
body.keydown(playerMoves); // invokes function to move both characters
winner(); //alert when player wins

});
