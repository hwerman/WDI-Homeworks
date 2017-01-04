console.log("fellowship.js linked.");

// Our heroes
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

// Their compatriots
var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

// Their journey
var lands = ['The Shire', 'Rivendell', 'Mordor'];

// An example of using jQuery selector for <body>
var $body = $('body');


// Part 1
function makeMiddleEarth() {

  // Create a <section> tag with id of 'middle-earth'
  var $middleEarthSection = $("<section id='middle-earth'></section>");

  // Loop through lands array, for each land create a new <article> tag
  // and append an <h1> tag with text set to the land name
  for (var i = 0; i < lands.length; i++) {
    $middleEarthSection.append($('<article></article>').append($('<h1></h1>').text(lands[i])));
  }

  // Append Middle-Earth to your document body
  $body.append($middleEarthSection);
}
makeMiddleEarth();


// Part 2
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // each hobbit should be a list item, with text showing their name
  // give each hobbit a class of hobbit

// makeHobbits();

function makeHobbits() {
  var $ul = $('<ul></ul>');
  var $shire = $('article')[0];
  for (var i = 0; i < hobbits.length; i++) {
      var $li = $('<li></li>');
      ($li).addClass('hobbits');
      ($li).html(hobbits[i]);
      ($ul).append($li);
      };
  ($shire).append($ul);
};
makeHobbits();


// Part 3
//   // create a div with an id of 'the-ring'
//   // give the div a class of 'magic-imbued-jewelry'
//   // add the ring as a child of Frodo
// }
// // keepItSecretKeepItSafe();

function keepItSecretKeepItSafe() {
  var $div = $('<div></div>');
  var $frodo = $('li')[0];
  ($div).attr('id', 'the-ring');
  ($div).addClass('magic-imbued-jewelry');
  ($frodo).append($div);
}
keepItSecretKeepItSafe();

// // Part 4
// function makeBuddies() {
//   // create an aside tag
//   // attach an unordered list of each 'buddy' in the aside
//   // insert your aside as a child element of rivendell
// }
// // makeBuddies();

// function makeBuddies(){
//   var $aside = $('<aside></aside>');
//   var $rivendell = $('article')[1];
//   var $budsList = $('<ul></ul>');
//   ($budsList).addClass('buddibuddi');
//   for (var i=0; i<buddies.length; i++){
//     var $buds = $('<li></li>');
//     ($buds).html(buddies[i]);
//     ($budsList).append($buds);
//   }
//   ($aside).append($budsList);
//   ($rivendell).append($aside);
// }
// makeBuddies();

function makeBuddies(){
  var $aside = $('<aside></aside>');
  var $rivendell = $('article')[1];
  var $budsList = $('<ul></ul>');
  ($budsList).addClass('buddibuddi');
  for (var i=0; i<buddies.length; i++){
      var $buds = $('<li></li>');
      $buds.html(buddies[i]);
      $budsList.append($buds);
  }
  $aside.append($budsList);
  $rivendell.append($aside);
}
makeBuddies();
// // Part 5
// function beautifulStranger() {
//   // change the 'Strider' textnode to 'Aragorn'
// }
// // beautifulStranger();

function beautifulStranger() {
  $('li')[7].html('Aragorn');
};
beautifulStranger();

// // Part 6
// function leaveTheShire() {
//   // assemble the hobbits and move them to Rivendell
//   // how does appendChild work on an element that already exists on the page?
// }
// // leaveTheShire();

function leaveTheShire() {
  var $rvn = $('ul').eq(0);
  $('aside').append($rvn);
}
leaveTheShire();

// // Part 7
// function forgeTheFellowShip() {
//   // create a new div with an id of 'the-fellowship'
//   // add each hobbit and buddy one at a time to 'the-fellowship'
//   // after each character is added make an <a href="http://www.w3schools.com/jsref/met_win_alert.asp">alert</a> that they have joined your party
//   // append the fellowship div to rivendell
// }
// // forgeTheFellowShip();

function forgeTheFellowShip() {
  var $fellowship = $('<div></div>');
  ($fellowship).attr('id','the-fellowship');

  for (var i=0; i < (hobbits.length+buddies.length); i++) {
    var $allCreatures = $('li').eq(0);
    console.log($allCreatures);
    ($fellowship).append($allCreatures);
    alert($allCreatures[0].innerText + " has joined the party!");
  }
  $('article:contains("Rivendell")').append($fellowship);
}
forgeTheFellowShip();

// // Part 8
// function theBalrog() {
//   // change the 'Gandalf' textNode to 'Gandalf the White'
//   // apply style to the element
//   // add a gray 3px border
//   // use documentation if you're unsure how to add style with javascript!
// }
// // theBalrog();

function theBalrog() {
  var $gandalf = $('li:contains("Gandalf the Grey")');
  $gandalf.html("Gandalf the White");
  $gandalf.css('border','solid 3px grey');
}
theBalrog();

// // Part 9
// function hornOfGondor() {
//   // pop up an alert that the horn of gondor has been blown
//   // Boromir's been killed by the Uruk-hai!
//   // Remove Boromir from the Fellowship
// }
// // hornOfGondor();

function hornOfGondor (){
  alert("Horn of Gondor has been blown.");
}
hornOfGondor();
$('li:contains("Boromir")').remove();


// // Part 10
// function itsDangerousToGoAlone(){
//   // take Frodo and Sam out of the fellowship and move them to Mordor
//   // add a div with an id of 'mount-doom' to Mordor
// }
// // itsDangerousToGoAlone();

function itsDangerousToGoAlone(){
    var $mordor = $('article').eq(0);
      for (var i=0; i<1; i++){
          var $loners = ($('.hobbits'));
          $mordor.append($loners[i]);
    }
      for (var i=0; i<1; i++){
          var $loners = $('.hobbits');
          $mordor.append($loners[i]);
    }
    var $mtDoom = $("<div= class='mount-doom'></div>");
    $mordor.append($mtDoom);
}
itsDangerousToGoAlone();


// // Part 11
// function weWantsIt() {
//   // Create a div with an id of 'gollum' and add it to Mordor
//   // Remove the ring from Frodo and give it to Gollum
//   // Move Gollum into Mount Doom
// }
// // weWantsIt();

function weWantsIt(){
    var $mordor = ($('article')[2]);
    var $gol = $("<div= id='gollum'></div>");
    $mordor).append($gol);
    $($gol).append($('#the-ring'));
    $($gol).appendTo($('.mount-doom'));
  }

weWantsIt();

// // Part 12
// function thereAndBackAgain() {
//   // remove Gollum and the Ring from the document
//   // Move all the hobbits back to the shire
// }
// // thereAndBackAgain();

// function thereAndBackAgain(){

// }
