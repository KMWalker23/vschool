// const nums= [1,2,3,4,5,6,7,8,9,10]
// let result= nums.reduce((x,y)=> x + y, 0)
// console.log(result)

// 1
   // function total(arr) {
       const arr1= [1,2,3]
       let result1= arr1.reduce((x,y)=> x+y)
       console.log(result1)
     
    // console.log(total([1,2,3])); // 6

 //   2
//     function stringConcat(arr) {
     const arr2= [1,2,3]
let result2= arr2.reduce((x,y)=> x+y, "")
console.log(result2)
//      console.log(stringConcat([1,2,3])); // "123"


// // //   //3
// function totalVotes(arr) {
const voters = [
         {name:'Bob' , age: 30, voted: true},
         {name:'Jake' , age: 32, voted: true},
         {name:'Kate' , age: 25, voted: false},
         {name:'Sam' , age: 20, voted: false},
         {name:'Phil' , age: 21, voted: true},
         {name:'Ed' , age:55, voted:true},
         {name:'Tami' , age: 54, voted:true},
         {name: 'Mary', age: 31, voted: false},
         {name: 'Becky', age: 43, voted: false},
         {name: 'Joey', age: 41, voted: true},
         {name: 'Jeff', age: 30, voted: true},
         {name: 'Zack', age: 19, voted: false}
     ]
 const result3 = voters.reduce((x,y) => {(y.voted ? x.didVote ++ : x.didntVote ++)
    return x}, {didVote: 0, didntVote: 0})
 console.log(result3)

//  console.log(totalVotes(voters)); // 7
  
//note for 3 Note: You don't necessarily have to use reduce for this, so try to think of multiple ways you could solve this.


// //4
// function shoppingSpree(arr) {
    let shoppingSpree= [
     { title: "Tesla Model S", price: 90000 },
     { title: "4 carat diamond ring", price: 45000 },
     { title: "Fancy hacky Sack", price: 5 },
     { title: "Gold fidgit spinner", price: 2000 },
     { title: "A second Tesla Model S", price: 90000 }
 ]
 
  let result4= shoppingSpree.reduce((x,y)=> {
    return x + y.price; }, 0) 

  console.log(result4)

 
//  console.log(shoppingSpree(wishlist)); // 227005

// //5

// function flatten(arr) {
   let arrays= [
     ["1", "2", "3"],
     [true],
     [4, 5, 6]
 ]
 
let result5= arrays.reduce((x,y) => x.concat(y),[])
 console.log(result5)

//  console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

//  //note for 5 Take a look at Array.concat() to help with this one

//  ///6
// function voterResults(arr)

 const voters2 = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]

//const result6 = voters2.reduce((x,y) => {(y.voted ? x.didVote ++ : x.didntVote ++)
   // return x}, {didVote: 0, didntVote: 0})
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

// reduce method takes 2 arguments
// 2nd is optional 
// the 1st argument is the callback function 
// that specifies what action needs to be done 
// the 2nd argument is the initialized value 
// this is the datatype of the return value


/*
{ 
    numYoungVotes: , 
    numYoungPeople: , 
    numMidVotesPeople:,
    numMidPeople: ,
    numOldPeopleVotes: ,
    numOldPeople: 
} 

*/
const totalVoters= voters2.reduce((x,y) => {
    if(y.age <= 25) { 
        x.numYoungPeople++
        if(y.voted) {
            x.numYoungVotes++
        }
    }
    else if (y.age >25 && y.age <=35) {
        x.numMidPeople++
        if(y.voted) {
            x.numMidVotesPeople++
        }
    }
    else {
        x.numOldPeople++
        if(y.voted){
            x.numOldPeopleVotes++
        }
    }
    return x
}
, 
{ 
    numYoungVotes: 0, 
    numYoungPeople: 0, 
    numMidVotesPeople:0,
    numMidPeople: 0,
    numOldPeopleVotes: 0,
    numOldPeople: 0
})
console.log(totalVoters)
//const result6 = voters2.reduce((x,y) => {(y.voted ? x.didVote ++ : x.didntVote++ && x.age [] )
     //   return x}, {didVote: 0, didntVote: 0})
 //console.log(result6)
 //console.log(youngAge)

 //Include how many of the potential voters were in the ages 18-25, 
 //how many from 26-35, how many from 36-55, and 
 //how many of each of those age ranges actually voted. 
 //The resulting object containing this data should have 6 properties.

// console.log(voterResults(voters)); // Returned value shown below:
// /*
// { numYoungVotes: 1,
//   numYoungPeople: 4,
//   numMidVotesPeople: 3,
//   numMidsPeople: 4,
//   numOldVotesPeople: 3,
//   numOldsPeople: 4
// }
// */
