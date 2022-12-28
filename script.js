import {people, comments} from "./arrays.js"

// Some and Every Checks
// Some - Checks if some fall within the criteria
// Array.prototype.some() // is at least one person 19 or older?
const isAdult1 = people.some(function(person) {
  const currentYear = (new Date()).getFullYear();
  if(currentYear - person.year >=19) {
    return true;
  }
})
console.log(isAdult1)

//is the same as:

const isAdult2 = people.some(person => {
  const currentYear = (new Date()).getFullYear();
  return currentYear - person.year >=19;
})
console.log(isAdult2)

//is the same as:

const isAdult3 = people.some(person => ((new Date()).getFullYear()) - person.year >= 19);
console.log(isAdult3)

// Every - Checks if all fall within the criteria
// Array.prototype.every() // is everyone 19 or older?

const isAdult4 = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);
console.log(isAdult4)

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

const comment1 = comments.find(function(comment) {
  if(comment.id === 823423) {
    return true;
  }
})
console.log(comment1)

//is the same as:

const comment2 = comments.find(comment => comment.id === 823423);
console.log(comment2)

// Array.prototype.findIndex()
// Find the comment with this ID
const deleted = comments.findIndex(comment => comment.id === 823423 )
console.log(deleted)

// delete the comment with the ID of 823423
comments.splice(deleted, 1);
console.log(comments)

// alternatively, build a new table without 823423 (aka "index")
const newComments = [
  ...comments.slice(0, deleted),
  ...comments.slice(deleted + 1)
];

console.log(newComments)
