console.log('starter2.js linked');

zoneArray = ['zone-4','zone-2','zone-1','zone-3'];

var zoneList = document.querySelectorAll('.zone');
for (var i =0; i< zoneList.length; i++){
  zoneList[i].addEventListener('click', greenIfNext);
//   zoneList[i].addEventListener('mouseout', outOfZone);
//   zoneList[i].addEventListener('click', clickGreen);
// }
//could possibly be a function that erases (pops,slices) an element from the array once clicked
//
// write a function that
// if 4 is green and 2 is clicked, 2 should turn green
// if 2 is green and 1 is clicked, 1 should turn green
// if 1 is green and 3 is clicked, 3 should turn green

// generate a function that makes the rest red if not their turn

// Function to make zone in position [i+1] green if [i] has just been clicked
// Function to make zone in any other position red if [i] has just been clicked

function greenIfNext(eventObject){
  var boxFigure = document.querySelector('.zone')
  // // zoneList[i]====boxFigure[i]
  // box.addEventListener('click');
  // if (box ==== zoneList.[i]+1)
  // eventObject.target.style.backgroundColor = 'green';
  // // eventObject.target.addEventListener('click', greenIfNext);

  if zoneArray[i]
  eventObject.target.style.backgroundColor = 'green';
  console.log('Greennnn');
}

function redIfNext(eventObject){
  eventObject.target.style.backgroundColor = 'red';
  console.log('Redddd');
}

//4. When a correct zone is clicked it should stay green.
function clickGreen(eventObject){
  //if zoneList[i]=i+1
  eventObject.target.style.backgroundColor = 'green';
  eventObject.target.removeEventListener('mouseout', outOfZone);
  console.log('Green click');

//   this.setAttribute('class','zone squad');
//   var squadClass = document.getElementsByClassName('squad');
//   if (squadClass.length === 4){
//     alert("Congrats!");
//     console.log("Congrats!");
//   }
// }
