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

// An example of using query selector
var body = document.querySelector('body');


// Part 1
function makeMiddleEarth() {
  var $main = document.createElement('main');
  //HJW this is a node signified by the $

  // create a section tag with an id of middle-earth
  var $section = document.createElement('section'); //HJW setting a node to section
  $section.setAttribute("id", "Middle-Earth"); //HJW giving it an id

  var $article = document.createElement('article'); //HJW this created an article
  var $shire = document.querySelectorAll('article')[0]; //HJW this created a node called shire

  $main.appendChild($section);

  // add each land as an article tag (add them one by one in a loop)
  for (var i = 0 ; i < lands.length ; i++) {
   var $article = document.createElement('article');
   // inside each article tag include an h1 with the name of the land
   var $h1 = document.createElement('h1');
   $h1.textContent = lands[i];
   var nameinArray = lands[i].toLowerCase().split(" ")
   var nameNoSpace = nameinArray.join("-")

   // each article should also have a class equal to its name ('Mordor' element should have a class of 'mordor', 'The Shire' should have a class of 'the-shire' - HINT: look up .split() and .join() for strings)
   $article.setAttribute("class", nameNoSpace);
   $article.appendChild($h1);
   $section.appendChild($article);
  }

  // append middle-earth to your document body
  body.appendChild($main);
}

makeMiddleEarth();


// Part 2

// display an unordered list of hobbits in the shire (which is the first article tag on the page)
// each hobbit should be a list item, with text showing their name
// give each hobbit a class of hobbit

function makeHobbits() {
  var $ul = document.createElement('ul');//HJW creating unordered list
  for (var i = 0; i < hobbits.length; i++) { //HJW creating loop to go through the array hobbits
      var $li = document.createElement('li'); //HJW creating li
      $li.setAttribute('class', 'hobbits');//HJW assigned class of hobbits
      $li.innerHTML = hobbits[i];//HJW populating li with the hobbits
      $ul.appendChild($li);//HJW adding li to the ul
      };
      document.querySelector('.the-shire').appendChild($ul);//HJW adding ul to the class shire
};
makeHobbits();


// Part 3
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add the ring as a child of Frodo
// keepItSecretKeepItSafe();

function keepItSecretKeepItSafe() {
  var $div = document.createElement('div');
  $div.setAttribute('id', 'the-ring');
  $div.setAttribute('class', 'magic-imbued-jewelry');
  var $frodo = document.querySelector('.hobbits');
  $frodo.appendChild($div);
};
keepItSecretKeepItSafe();

    //HJW woot! got to this part at 430 092316


// Part 4
  // create an aside tag
  // attach an unordered list of each 'buddy' in the aside
  // insert your aside as a child element of rivendell
// makeBuddies();

function makeBuddies() {
  var $aside = document.createElement('aside');
  var $ul = document.createElement('ul');
  for (var i = 0; i < buddies.length; i++) {
    var $li = document.createElement('li');
    $li.innerHTML = buddies[i];
    $ul.appendChild($li);
  };
  $aside.appendChild($ul);
  document.querySelector('.rivendell').appendChild($aside);
  };
makeBuddies();

    //HJW woooooo got part 4 a lot faster.


// Part 5
// change the 'Strider' textnode to 'Aragorn'
// beautifulStranger();

function beautifulStranger() {
  document.querySelector('aside>ul>li:nth-child(4)').innerHTML = "Aragorn";
  };
  beautifulStranger();

    //HJW done!


// Part 6
//   // assemble the hobbits and move them to Rivendell
//   // how does appendChild work on an element that already exists on the page?
// };
// // leaveTheShire();


function leaveTheShire() {
  var $ul = document.querySelector('ul');
  document.querySelector('.the-shire').removeChild($ul);
  document.querySelector('aside').appendChild($ul);
  };

  leaveTheShire();

    //HJW the following were failed attempts
  // var $hobbitsOnTheMove = document.querySelectorAll('.hobbits');
  // var $h1 = document.createElement('$theDell>h1');
  // document.querySelector($h1).appendChild($hobbitsOnTheMove);

    //HJW yay finished part six!


// Part 7

 // create a new div with an id of 'the-fellowship'
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an <a href="http://www.w3schools.com/jsref/met_win_alert.asp">alert</a> that they have joined your party
  // append the fellowship div to rivendell
//

function forgeTheFellowShip() {
    var $div = document.createElement('div');
    $div.setAttribute('id', 'the-fellowship');
    document.querySelector('.rivendell').appendChild($div);

    for (var i=0; i < hobbits.length; i++) {
      var $hobbitsOnly = document.querySelector('.rivendell>aside>ul>li');
      $div.appendChild($hobbitsOnly);

      alert(hobbits[i] + "has joined the party!");
    }

    for (var i=0; i < buddies.length; i++) {
      var $buddiesOnly = document.querySelector('.rivendell>aside>ul>li');
      $div.appendChild($buddiesOnly);

      alert(buddies[i] + "has joined the party!");
    }
  };

    forgeTheFellowShip();

//HJW failed attempts:
                  // function forgeTheFellowShip() {
                  //     var $div = document.createElement('div');
                  //     $div.setAttribute('id', 'the-fellowship');

                  //     for (var i=0; i < buddies.length; i++) {
                  //        var $buddies.Only = document.querySelector('.rivendell>aside>ul>li');
                  //        $div.appendChild($hobbitsOnly);

                  //       alert(buddies[i] + "has joined the party!");
                  //     };

                  //     for (var i=0; i < hobbits.length; i++) {
                  //       var $hobbitsOnly = document.querySelector('.rivendell>aside>ul>li');
                  //       $div.appendChild($hobbitsOnly);

                  //       alert(hobbits[i] + "has joined the party!");
                  //     };

                  //     var $hobsAndBuddiesList = document.createElement('ul');
                    //     $div.appendChild($hobsAndBuddiesList);
                    //     var $everyOne = document.querySelectorAll('li');

                    //     for (var i=0; i < $everyOne.length; i++) {
                    //       $hobsAndBuddiesList.appendChild($everyOne);
                    //       alert($everyOne[i] +"has joined the party");
                    //     };

                    //     }
                    // //

                        // document.querySelectorAll('.rivendell>aside>ul>li').setAttribute('class','test');
                        // $buddiesOnly.setAttribute('class','test');
                          //  = document.querySelectorAll('.rivendell>aside>ul>li');

                          // document.querySelector($).removeChild('ul');


                          // var $hobsAndBuddiesList = document.createElement('ul');
                          // $div.appendChild($hobsAndBuddiesList);
                      //     // document.querySelector($aside).appendChild($div);

                      //       // $everyOne = document.getElementsByTagName('li');
                      //       // $hobsAndBuddiesList.appendChild($everyOne[i]);

                        // // //function forgeTheFellowShip() {
                        //     var $div = document.createElement('div');
                        //     $div.setAttribute('id', 'the-fellowship');

                        //     for (var i=0; i < hobbits.length+1; i++) {
                        //       var $hobbitsOnly = document.querySelector('.rivendell>aside>ul>li');
                        //       $div.appendChild($hobbitsOnly);

                        //       alert(buddies[i] + "has joined the party!");
                        //     }

                          // };


// Part 8
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // add a gray 3px border
  // use documentation if you're unsure how to add style with javascript!

// theBalrog();

function theBalrog() {
    document.querySelector('div>li:nth-child(1)').innerHTML = "Gandalf the White";
  };

  theBalrog();

  document.querySelector('div>li:nth-child(1)').style.border = "solid 3px gray";

    //HJW part8 way easier than part7

// Part 9
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // Remove Boromir from the Fellowship

// hornOfGondor();

function hornOfGondor() {
  alert("Horn of Gondor has been blown.");
};

hornOfGondor();

 var $boro = document.querySelector('div>li:nth-child(5)');
 document.querySelector('#the-fellowship').removeChild($boro);

    //HJW yessss

// Part 10
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor

function itsDangerousToGoAlone(){
    for (var i=0; i < hobbits.length-2; i++){
      var $loners = document.querySelector('.hobbits');
      document.querySelector('#the-fellowship').removeChild($loners);
      document.querySelector('.mordor').appendChild ($loners);
    }

    var $mountDoom = document.createElement('div');
    $mountDoom.setAttribute('id', 'mount-doom');
    var $mor = document.querySelector('.mordor');
    $mor.appendChild($mountDoom);

  };

itsDangerousToGoAlone();

    //HJW built this loop easier than the other loops

// Part 11

  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
// weWantsIt();

function weWantsIt() {
  var $gol = document.createElement('div');
  $gol.setAttribute('id', 'gollum');

  document.querySelector('.mordor').appendChild($gol);
  // $div.innerHTML = "Gollum";

  var $theRing = document.querySelector('#the-ring');
  document.querySelector('.mordor>li').removeChild($theRing);
  document.querySelector('#gollum').appendChild($theRing);

  var $mountDoom = document.querySelector('#mount-doom');
  $mountDoom.appendChild($gol);

  };

weWantsIt();

  //HJW donions.


// Part 12
  // remove Gollum and the Ring from the document
  // Move all the hobbits back to the shire

// thereAndBackAgain();

function thereAndBackAgain() {
  var $gol = document.querySelector('#gollum');
  var $mountDoom = document.querySelector('#mount-doom')
  $mountDoom.removeChild($gol);

var $hobbitList = document.getElementsByClassName('hobbits');
var $shireDestination = document.querySelector('.the-shire');

for (var i=0; i < hobbits.length; i++){
      var $hobbit = $hobbitList[i];
      $shireDestination.appendChild($hobbit);
    }
  };

thereAndBackAgain();

  //HJW andddd we're off. maybe I should actually watch LOTR one day.
