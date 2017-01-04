/********************************
*
* DO YOUR ASSIGNMENT IN THIS FILE
*
*********************************/

// TEST EARLY AND OFTEN - node starter.js in the terminal
// After each step, git add . AND git commit -m "completed part PART-LETTER-HERE"
// Complete all four steps specified below - each step needs a console.log statement - and follow the homework submission process (check the wiki!).

// EXAMPLE - Try running node starter.js before working on any of the parts and see what happens in the terminal.
var givenVariable = 20;
var doubledVariable = givenVariable * 2;
var tripledVariable = givenVariable * 3;
console.log(doubledVariable);
console.log("EXAMPLE","tripledVariable",tripledVariable);

// After running this and feeling comfortable, feel free to comment the above block of code out (either give each line a // or highlight the block of code and press COMMAND - / )



// STEP A: Pythagorean Theorem

// // Write an expression here which computes
// // the correct value of c based on the values of a and b
// // Log your answer (the value of c) to the console

function pyth (sideA, sideB) {
   return Math.sqrt(Math.pow(sideA,2) + Math.pow(sideB,2))
 };

var a = 3;
var b = 4;
var c = pyth (a, b)
console.log(c)
console.log("Answer",c);

// STEP B: Basic Conversion

// Write an expression here which computes
// the correct value of the variable kilograms
// Log your answer to the console

function lbToKg (x) {
  return x/2.205
}

var pounds = 155;
var kilograms = lbToKg (pounds)
console.log(kilograms)
console. log('Answer',kilograms,'kg')

// STEP C: Old Modems

// Write an expression here which computes
// the correct value of the variable timeToDownload
// Log your answer to the console

//the following is incorrect/
// function download (size){
//   return (56*8589934)*size)
// }
// var value = 8589934;
// var sizeInGB = 25;
// var timeToDownload = download (25);
// console.log(timeToDownload)
// console.log('Answer',timeToDownload,'seconds')


// STEP D: Killer Caffeine

// For this part create you own appropriately named variables for
// any values you want to use
// Create a variable which will store the number of cups
// which will kill you
// Compute the number of cups
// Log the answer to the console

/*[number of cups you have x 95mg of caffeine] > (weightinpounds)*(6000mg/100pounds) */

/* 6000 mg per 100 pounds will kill you
1 cup has 95 mg of caffeine
my weight = 145
*/

var weight = 145
var amtGramsToDie = (6000)*(weight/100)
var cupsMyDeath = amtGramsToDie/95
console.log(cupsMyDeath)
console.log('Answer',cupsMyDeath,'cups')
