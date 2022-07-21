//1

//function doubleNumbers(arr){
   
    let double = [2, 5, 100]
  let newDouble = double.map(n => n * 2 )
  console.log(newDouble)

 // [4, 10, 200]


  //2
  //function stringItUp(arr){
    const stringArr = [2, 5, 100] 
 const stringItUp = stringArr.map(num=> num.toString())
 
 
  console.log(stringItUp) // ["2", "5", "100"]


//   //3
//   function capitalizeNames(arr){

  
//   // Output:
//   // ["John", "Jacob", "Jingleheimer", "Schmidt"]

// //sidenotes for 3

var arr1 = ["john", "JACOB", "jinGleHeimer", "schmidt"]
let capStr = x => x[0].toUpperCase() + x.slice(1).toLowerCase()
let caps = arr1.map(capStr)
console.log(caps)



//   //4

//   function namesOnly(arr){
const arr = [
        {
        name: "Angelina Jolie",
        age: 80
        },
        {
        name: "Eric Jones",
        age: 2
        },
        {
        name: "Paris Hilton",
        age: 5
        },
        {
        name: "Kayne West",
        age: 16
        },
        {
        name: "Bob Ziroll",
        age: 100
        }
        ]
        const namesOnly = arr.map(x => x.name)
        
    

   console.log(namesOnly)
  
//   // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]


//   //5 can go to matrix

//   function makeStrings(arr){
  
    const candidates = [
        {
        name: "Angelina Jolie",
        age: 80
        },
        {
        name: "Eric Jones",
        age: 2
        },
        {
        name: "Paris Hilton",
        age: 5
        },
        {
        name: "Kayne West",
        age: 16
        },
        {
        name: "Bob Ziroll",
        age: 100
        }
        ]
        const result = candidates.map(candidate => candidate.age >= 18 ? candidate.name + 'Can go to Matrix' : candidate.name + 'Can NOT go to Matrix')
       
  //}
  
  console.log(result)


//   // ["Angelina Jolie can go to The Matrix",
//   // "Eric Jones is under age!!",
//   // "Paris Hilton is under age!!",
//   // "Kayne West is under age!!",
//   // "Bob Ziroll can go to The Matrix"]


//   //6 the names in h1 and ages in h2

//   function readyToPutInTheDOM(arr){
   
// const folk = [
//     {
//     name: "Angelina Jolie",
//     age: 80
//     },
//     {
//     name: "Eric Jones",
//     age: 2
//     },
//     {
//     name: "Paris Hilton",
//     age: 5
//     },
//     {
//     name: "Kayne West",
//     age: 16
//     },
//     {
//     name: "Bob Ziroll",
//     age: 100
//     }
//     ]
//     const readyToPutInTheDOM = folk.map(folk=> folk.name,h1 + folk.age, h2)

//   }
//   console.log(readyToPutInTheDOM([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ]));

function readyToPutInTheDOM(arr) {
    return arr.map(function (person) {
        return `<h1>${person.name}</h1> <h2>${person.age}</h2>`
    })
}
console.log(readyToPutInTheDOM([
          {
              name: "Angelina Jolie",
              age: 80
          },
          {
              name: "Eric Jones",
              age: 2
          },
          {
              name: "Paris Hilton",
              age: 5
          },
          {
              name: "Kayne West",
              age: 16
          },
          {
              name: "Bob Ziroll",
              age: 100
          }
      ]))


  // ["<h1>Angelina Jolie</h1><h2>80</h2>",
  // "<h1>Eric Jones</h1><h2>2</h2>",
  // "<h1>Paris Hilton</h1><h2>5</h2>",
  // "<h1>Kayne West</h1><h2>16</h2>",
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]

