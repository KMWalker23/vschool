
// 1
//function leastToGreatest(arr) {
    const arr1= [1, 3, 5, 2, 90, 20]
    const result1= arr1.sort((a,b)=> a-b) 
    console.log(result1)
    
//   console.log(leastToGreatest([1, 3, 5, 2, 90, 20])); // [1, 2, 3, 5, 20, 90]

// // //   2
// function greatestToLeast(arr) {
    const arr2= [1, 3, 5, 2, 90, 20]
    const result2= arr2.sort((a,b)=> b-a) 
    console.log(result2)

// console.log(greatestToLeast([1, 3, 5, 2, 90, 20])); // [90, 20, 5, 3, 2, 1]


// //   //3
// function lengthSort(arr) {
 const arr3= ["dog", "wolf", "by", "family", "eaten"]
const result3= arr3.sort((a,b)=> a.length-b.length)
console.log(result3)

// your code here
//   }
  
//   console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "wolf", "eaten", "family"]

  
// //   //4
// function alphabetical(arr) {

      const arr4= ["dog", "wolf", "by", "family", "eaten"]
          const result7= arr4.sort(function(a, b) {
          return a === b ? 0 : a > b ? 1 : -1;
        })
    console.log(arr4)
// }

// console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "eaten", "family", "wolf"]
// //   //5

// function byAge(arr){
    const arr8= [
              { name: "Quiet Samurai", age: 22 },
              { name: "Arrogant Ambassador", age: 100 },
              { name: "Misunderstood Observer", age: 2 },
              { name: "Unlucky Swami", age: 77 }
          ]
    const result8= arr8.sort((a,b)=> a.age - b.age) 
    console.log(result8)
  
//   console.log(byAge([
//       { name: "Quiet Samurai", age: 22 },
//       { name: "Arrogant Ambassador", age: 100 },
//       { name: "Misunderstood Observer", age: 2 },
//       { name: "Unlucky Swami", age: 77 }
//   ]));
//   // => [ { name: 'Misunderstood Observer', age: 2 },
//   //  { name: 'Quiet Samurai', age: 22 },
//   //  { name: 'Unlucky Swami', age: 77 },
//   //  { name: 'Arrogant Ambassador', age: 100 } ]

