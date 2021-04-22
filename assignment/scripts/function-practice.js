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


// 2. Function to return an personalized hello, for example 'Hello, Jo!'
function helloName( name ){ // start helloName function
  return name;
} // end helloName
// Remember to call the function to test
console.log( 'Hello,', helloName( 'Terry' ) + '!' ); // console log to call function

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) { // function to add up 2 numbers
  // return firstNumber + secondNumber;
  let answer = firstNumber + secondNumber;
  return answer;
} // end addNumbers
console.log( 'Two numbers added together', addNumbers( 10, 35 ) ); // console log to call function

// 4. Function to multiply three numbers & return the result
function multiplyThree( num0, num1, num2 ){ // function multiply 3 numbers start
  let answer = num0 * num1 * num2
  return answer;
} // end multiplyThree

console.log( 'Three numbers muliplied:', multiplyThree( 10, 20, 30) ); // console log to call function


// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) { // start function to check if number is greater than 0
  if ( number > 0 ){
    return true;
  }
  else {
    return false;
  }
} // end isPositive function
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) ); // values given by assignment
console.log( 'isPositive - should say false', isPositive(0) ); // values given by assignment
console.log( 'isPositive - should say false', isPositive(-3) ); // values given by assignment

console.log( 'Is 5 a positive number?', isPositive(5)); // separate console.log statements
console.log( 'Is 0 greater than 0?', isPositive(0)); // not sure if this is what the assignment is asking
console.log( 'Is -3 greater than 0?', isPositive(-3));

// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
const favSandwich = [ 'Bread', 'Mayo', 'Mustard', 'Turkey', 'Cheddar', 'Lettuce' ]; // my favorite sandwich array
const favSmell = [];
console.log('My favorite sandwich consists of:', favSandwich); // console log the entire array

function getLast( array ) { // start getLast item of an array
  return array[array.length-1];
} // end getLast item of the array

console.log( 'Test - should say Lettuce:', getLast(favSandwich)); // test to see last item in array
console.log( 'Test - should say undefined:', getLast(favSmell));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
const favDrinks = [ 'water', 'energy drink', 'diet soda', 'seltzer' ]

function find( value, array ){ // start find value of array
  for (let i = 0; i < array.length; i++) {
    if ( array[i] === value ){ // find if value is exact match within array
      return true; // return true if found
    }
  }
  return false; // return false if value not found
} // end find value

console.log( 'Is water in the array?', find('water', favDrinks)); // find if water value is in the array
console.log( 'Is fizzy pop in the array?', find('fizzy pop', favDrinks)); // find if fizzy pop is in the array
console.log( 'Is diet soda in the array?', find('diet soda', favDrinks)); // find another value within the array


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
