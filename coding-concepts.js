// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2022"
console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: logged as 10 because each letter and number in the string counts as 1, and the space will also count as 1.

// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain: o. When counting index in a string, you start at zero index. Therefore, H is index 0, e = 1, l = 2, l = 3, and o = index 4.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: Ruby. In an array, each string counts as 1 index space. Starting from zero index again, "JavaScript" is in index 0 and "Ruby" is in index 1.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: nothing
// b) Verify and explain: TypeError. The ".toUpperCase()" command can be applied to individual strings, but cannot be applied to arrays.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: number
// b) Verify and explain: number. The command "typeof" is assessing what kind of data type is following it. Since there is a ".length" after the variable "dataTypes", it is forcing a type coercion to a number, which is then being read by "typeof" and returning "number".
