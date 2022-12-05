// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:

// create function called boilingCheck that takes in a number and compares it to boiling point and returns whether the inputted number is above, below, or at boiling point.

// input: 42
// output: 42 is below boiling point

// input: 350
// output: 350 is above boiling point

// input: 212
// output: 212 is at boiling point

const temp1 = 42
// Expected output: "42 is below boiling point"

const temp2 = 350
// Expected output: "350 is above boiling point"

const temp3 = 212
// Expected output: "212 is at boiling point"

var boilingPoint = 212
const boilingCheck = (num1) => {
    if(num1 < boilingPoint){
        return `${num1} is below boiling point`
    } else if(num1 > boilingPoint){
        return `${num1} is above boiling point`
    } else{
        return `${num1} is at boiling point`
    }
}
console.log(boilingCheck(42))
// output -> 42 is below boiling point
console.log(boilingCheck(350))
// output -> 350 is above boiling point
console.log(boilingCheck(212))
// output -> 212 is at boiling point


// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:

// combine the two given arrays together using .concat
// assign newly combined array to a separate variable
// return length of new array using .length

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

var padresRuns = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)

console.log(padresRuns.length)
// output -> 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:

// convert string to an array using .split("")
// assign new array to a separate variable currentCohortReverse
// reverse letters in array using .reverse()
// convert array back to string using .join("")
// reassign currentCohortReverse to equal reconverted string

const currentCohort = "Hotel 2022"
// Expected output: "2202 letoH"

var currentCohortReverse = currentCohort.split("")
currentCohortReverse.reverse()
currentCohortReverse = currentCohortReverse.join("")

console.log(currentCohortReverse)
// output -> 2202 letoH

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:

// create code that will return the index of the last occurrance of the given value within an array using .lastIndexOf()

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
// Expected output: 7

console.log(myNumbers.lastIndexOf(givenValue1))
// output -> 7

const givenValue2 = 10
// Expected output: 8

console.log(myNumbers.lastIndexOf(givenValue2))
// output -> 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:

// create function that compares the numbers in the array to each other using inputs "a" and "b"
// wrap the function within a .sort()
// return array with the numbers in descending order

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

sanDiegoSummerTemperatures.sort((a, b) => {
  return b - a
})

console.log(sanDiegoSummerTemperatures)
// output -> [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]

sanDiegoWinterTemperatures.sort((a, b) => {
    return b - a
})

console.log(sanDiegoWinterTemperatures)
// output -> [68, 67, 66, 66, 62, 59, 59]