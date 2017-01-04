console.log('starter2.js linked');

var counter = 0;
var $allZones = document.querySelectorAll('.zone');
var zoneArray = ['zone-4', 'zone-2,', 'zone-1', 'zone-3']

function initialize(){
    for (var i =0; i< $allZones.length; i++) {
      $allZones[i].addEventListener('mouseover', confirmZone);
      $allZones[i].addEventListener('mouseout', clearZone);
      $allZones[i].addEventListener('click', saveZone);
    }
  }

function confirmZone(event){
  if (event.target.id === zoneArray[counter]){
      event.target.style.backgroundColor = 'green';
      } else {
      event.target.style.backgroundColor = 'red';
      }
  console.log(event.target.id);
}

function clearZone(event){
    event.target.style.backgroundColor = 'white';
}

function saveZone(event){ //to keep the box green and add to the counter for the next
  if (event.target.id === zoneArray[counter]){
    event.target.removeEventListener('mouseout','clearZone');
    counter++;
  }
}

initialize();


var $allZones = $('.zone')
$allZones.css('')
