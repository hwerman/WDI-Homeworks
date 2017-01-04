console.log('starter1.js linked');
//code goes here
//HJW pseudocode
// 1) Create a function for when the EVENT occurs. Event = when the mouse hovers over a div in the
// class container in the class zone. Result will be turning background color of divs green.
//
// 2) Set up event handler to listen for mouse hovering (mouseOver?)
//
// 3) Create a function for when ANOTHER EVENT occurs. Another event = when the mouse exits the div
// in the class container in the class zone. Result will be turning background color of divs white.
//
// 4) Set up event handler to listen for mouse exiting (mouseout?)
//
// 5) Create a function for when ANOTHER EVENT occurs. This event = when there is a click on the
// div in the class container in the class zone. Result will be locking its color green.
          // Make sure this ends the effects of step3 so that it is locked into green. (Remove event
          // listener from step 3)

          //Set up event handler to listen for mouse clicking

// 6) Create function for when all divs are clicked on and green, alert goes out
      //Set up event handler to listen for all clicked?

var zoneList = document.querySelectorAll('.zone');
for (var i =0; i< zoneList.length; i++){
  zoneList[i].addEventListener('mouseover', greenZoneHover);
  zoneList[i].addEventListener('mouseout', outOfZone);
  zoneList[i].addEventListener('click', clickGreen);
}

function greenZoneHover(eventObject){
  eventObject.target.style.backgroundColor = 'green';
  console.log('Green zone hover');
}

function outOfZone(eventObject){
  eventObject.target.style.backgroundColor = 'white';
  console.log('Out of zone');
}

function clickGreen(eventObject){
  eventObject.target.style.backgroundColor = 'green';
  eventObject.target.removeEventListener('mouseout', outOfZone);
  console.log('Green click');

  this.setAttribute('class','zone squad');
  var squadClass = document.getElementsByClassName('squad');
  if (squadClass.length === 4){
    alert("Congrats!");
    console.log("Congrats!");
  }
}

// // if all four divs with a class of 'zone' have a background color of green - make alert

// function allGreen(){
// for (var i=0; i < zoneList.length; i++){


// var count = 0
// for (var i=0; i < zoneList.length; i++){
//   var square = zoneList[i];
//   if (square.style.backgroundColor === 'green'){
//     count++
//   }
//   if (count === 4){
//     console.log('Congrats');
//   }
// }
// };

// //   // if (zoneList[i].style.backgroundColor !== 'green'){
// //   //     return;}
// //   // else if (zoneList[i].style.backgroundColor === 'green'){
// //   //   alert("Congrats!");
// //   // }
// //   };
// // }
