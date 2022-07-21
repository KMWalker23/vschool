    var peopleArray = [
        {
            firstName: "Sarah",
            lastName: "Palin",
            age: 47
        },
        {
            firstName: "Frank",
            lastName: "Zappa",
            age: 12
        },
        {
            firstName: "Rick",
            lastName: "Sanchez",
            age: 78
        },
        {
            firstName: "Morty",
            lastName: "Smith",
            age: 29
        },
        {
            firstName: "Kyle",
            lastName: "Mooney",
            age: 27
        },
        {
            firstName: "Pasha",
            lastName: "Datsyuk",
            age: 13
        },
        {
            firstName: "Lev",
            lastName: "Tolstoy",
            age: 82
        }
    ]

//      const age = peopleArray.filter(x=> x.age>18)
// console.log(age)

    //return a list of everyone older than 18, which is
    //sorted alphabetically by last name, and where
    //each name and age is embedded in a string that looks like an HTML <li> element
   const age = peopleArray.filter(x=> x.age>18)
   console.log(age)

   const names1= peopleArray.sort(function(x, y) {
   return x === y ? 0 : x.lastName > y.lastName ? 1 : -1;
 })
console.log(names1)

const ageOld= age.filter
const nameAlpha= names1.filter
const result7= {}

const youngAge = voters2.filter(x=> x.age >=18 && x.age<= 25)
const midAge = voters2.filter(x=> x.age >=26 && x.age<= 35)
const oldAge = voters2.filter(x=> x.age >=36 && x.age<= 55)

const youngVotes= youngAge.filter(x=> x.voted)
const midVotes= midAge.filter(x=> x.voted)
const oldVotes= oldAge.filter(x=> x.voted)

const result6= { numYoungVotes: youngVotes.length, 
    numYoungPeople: youngAge.length, 
numMidVotesPeople: midVotes.length,
numMidPeople: midAge.length,
 numOldPeopleVotes: oldVotes.length,
numOldPeople: oldAge.length} 

console.log(result6)

// //   //5

// //   function ofAge(arr){
//     const names = [
//         { name: "Angelina Jolie", age: 80 },
//         { name: "Eric Jones", age: 2 },
//         { name: "Paris Hilton", age: 5 },
//         { name: "Kayne West", age: 16 },
//         { name: "Bob Ziroll", age: 100 }
//     ]
// const age = names.filter(x=> x.age>18)
// console.log(age)
// //   // test
// //   console.log(ofAge([
// //       { name: "Angelina Jolie", age: 80 },
// //       { name: "Eric Jones", age: 2 },
// //       { name: "Paris Hilton", age: 5 },
// //       { name: "Kayne West", age: 16 },
// //       { name: "Bob Ziroll", age: 100 }
// //   ]));
// //   // =>
// //   //[ { name: 'Angelina Jolie', age: 80 },
// //   //  { name: 'Bob Ziroll', age: 100 } ]

const youngAge = voters2.filter(x=> x.age >=18 && x.age<= 25)
const midAge = voters2.filter(x=> x.age >=26 && x.age<= 35)
const oldAge = voters2.filter(x=> x.age >=36 && x.age<= 55)

const youngVotes= youngAge.filter(x=> x.voted)
const midVotes= midAge.filter(x=> x.voted)
const oldVotes= oldAge.filter(x=> x.voted)

const result6= { numYoungVotes: youngVotes.length, 
    numYoungPeople: youngAge.length, 
numMidVotesPeople: midVotes.length,
numMidPeople: midAge.length,
 numOldPeopleVotes: oldVotes.length,
numOldPeople: oldAge.length} 

console.log(result6)