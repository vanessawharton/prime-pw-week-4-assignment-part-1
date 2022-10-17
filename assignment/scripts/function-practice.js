console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'

let personalizedName = [];

function helloName(personalizedName) {
  return "Hello, " + personalizedName + "!";
}
// Remember to call the function to test
console.log(helloName('You'));


// 3. Function to add two numbers together & return the result
// return firstNumber + secondNumber;

let firstNumber = 1;
let secondNumber = 6;

function addNumbers() {
  let addNumbers = firstNumber + secondNumber;
  return addNumbers;
}
console.log(addNumbers());

// 4. Function to multiply three numbers & return the result

let num0 = 1;
let num1 = 3;
let num2 = 5;

function multiplyThree(){
  let multiplyThree = (num0 * num1 * num2);
  return multiplyThree;
}
console.log(multiplyThree());

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if ( number > 0 ){
    return true;
  }
  else {
    return false;
  }
}

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast() {
  let array = [11, 22, 33];
  let lastNumber = array[array.length -1];
  let getLast = lastNumber;
  if (lastNumber){
    return getLast;
  }
  else if (lastNumber){
    return 'undefined';
  }
}
console.log(getLast());

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

let array = [11, 22, 33];
let value = 22;

function findValue(){
  for(let i = 0; i < array.length; i++){
    if (array[i] > 0){
      return true;
    }
    else{
      return false;
    }
  }
}
console.log(findValue());


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!