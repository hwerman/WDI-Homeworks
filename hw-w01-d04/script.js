// Enter your solutions for hw-w01-d04 here!
// Make sure to reference the readme.md for detailed instructions

// Part 1 - Objects
var bobby = {
  name: "Bobby King",
  nickname: "The Boddy",
  age: 19,
  weight: 260,
  favoriteThings: {
    movie: "The Net",
    food: "Lasagna",
    website: "www.github.com",
    hat: "red hat"
  },
  hobbies: [
    "lacrosse",
    "coding",
    "whiteboarding"
  ]
}

// 1. console.log Bobby's nickname
console.log(bobby.nickname);

// 2. console.log Bobby's age
console.log(bobby.age);

// 3. console.log Bobby's favorite movie
console.log(bobby.favoriteThings.movie);

// 4. console.log Bobby's first hobby
console.log(bobby.hobbies[0]);

// Part 2 - Functions
// When you finish writing the functions, uncomment the function
// call to see the result

// 1.
function multiply(a, b) {
    return(a*b);
}
console.log(multiply(3,4));

// multiply(3, 4);

// 2.
function maxOfThree(a, b, c) {
  if ((a>b)&&(a>c)) return a;
  else if ((b>a)&&(b>c)) return b;
  else if ((c>a)&&(c>a)) return c;
}
  // Do not use Math.max
console.log(maxOfThree(3,4,5))

//maxOfThree(3, 4, 5);

// 3.
function howMuchCoffeeWillEndMe(weight) {
    var amtGramsToDie = (6000)*(weight/100);
    var cupsMyDeath = Math.round(amtGramsToDie/95);

    return cupsMyDeath;
}

console.log(howMuchCoffeeWillEndMe(200));

  // It's estimated that 6 grams per hundred pounds of body weight can cause
  // death! Given an 8oz cup of coffee has 95mg of caffeine, calculate how many
  // cups it takes to kill YOU (or the you that you want to be!).


// 4(a)
// Your answer here
//

/*var x = 7;
function foo( ) {
  var x = 3;
}
foo( );
console.log(x);
*/

// //the output is 7 since var x =7 is in the global scope and  the console.log(x) statement
// is requesting that the value of x be printed. The var x = 3 statement is within the function foo
// which is not executed for the console log statement. the function foo does not have an action
// regardless.//

// }

// 4(b)
// Your answer here
//

/*var x =7;
function foo (){
  x = 3;
}
foo ()
console.log(x);*/


//the output will be 3
//affects the global variable x
//finding any x globally and reassigning the value to the 3 when you execute foo//

// 4(c)
// Your answer here
//

/*var x = 7;
function foo(x) {
  x = 3;
}
foo(5);
console.log(x);

output will be 7! because x in the foo function becomes a parameter when it is entered in the parentheses
first:
foo(5) computes to 3
then console.log(x) pulls from the global variable 7 not the x from foo

*/

// 5
// Your answer here
//
// function foo(a, b) {
//   console.log(a + b);
// }

//MY REPONSE: this will print 40//

// function bar(a, b) {
//   return a + b;
// }

//MY RESPONSE: this will not print anything//

// function baz(a, b) {
//   var c = a + b;
//   return;
// }

//MY RESPONSE: this will not print anything//

// var x = foo(10, 30); // MY RESPONSE: this will be undefined because the function foo does not have a return so when executed it is undefined
// var y = bar(7,10);//MY RESPONSE: 7+10=17, this will read 17
// var z = baz(80,20); //MY RESPONSE: this will be undefined because the function baz does not have a return
// console.log(x, y, z); undefined, 17, undefined

// // Part 3 - DOM

// 1. Change the background-color to blue

document.body.style.backgroundColor = 'blue'

// 2. Append a new <li> with the text 'Fix cars' to Dom's Favorite Things
var li = document.createElement('li')
li.innerHTML = 'fix cars'
document.querySelector('ul').appendChild(li) //make sure li is not in a string because you are referring to the variable you just set as li


// 3. Remove the last <li> from Dom's Favorite Things

//MY RESPONSE: after a lot of playing around with the elements, this is what I did to meet the goal!//

var li = document.createElement('li')
li.innerHTML = 'fix cars'
document.querySelector('ul').appendChild(li);

document.querySelector('ul').setAttribute('id','list');
var thelist = document.getElementById ("list");
list.removeChild(list.childNodes[11]);
