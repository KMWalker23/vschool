function collectAnimals(...animals) {
  return animals
}
const animals= ["dog", "cat", "mouse", "jackolope", "platypus"]

collectAnimals("dog", "cat", "mouse", "jackolope", "platypus")
// ["dog", "cat", "mouse", "jackolope", "platypus"]

console.log(animals)



function combineFruit(fruit, sweets, veggies){
  const foodsObject = {
    fruit, 
    sweets,
    veggies
  }

  return foodsObject

  //const fruits = [...fruit, ...sweets, ...veggies]
  
  // const lengthFruit = fruits.length
  
  // for (let i = 0; i < lengthFruit; i++) {
  //   console.log(fruits[i])
  // }
}

const fruit= ["apple", "pear"]
const sweets= ["cake", "pie"]
const veggies= ["carrot"]
  
// const apple = "apple"
// const pear = "pear"
// const cake = "cake"
// const pie = "pie"
// const carrot = "carrot"



// const {fruit: fruit2} = foodsObject

//console.log('food', foodsObject)

combineFruit(fruit, sweets, veggies)

function parseSentence(pSentence){
  const {location, duration}= pSentence
  return `We're going to have a good time in ${location} for ${duration}`

}
const pSentence= {
  location: "Burly Idaho",
  duration: "2 weeks"
};

console.log(parseSentence(pSentence))




  function returnFirst(items){
    const [firstItem] = items; 
    return firstItem
}



const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(favoriteActivities){
  let [first, second, third, fourth, fifth] = favoriteActivities
    return `My top three favorite activities are,  ${first},  ${second}, and  ${third}"`;
}

//returnFavorites(favoriteActivities)

console.log(returnFavorites(favoriteActivities))


// function combineAnimals() {

// }

// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];

//combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals);

// ["dog", "cat", "mouse", "jackolope", "platypus"]

// let a =1
// let b=2
// let c = 3
// let acc = 4

function product(a, b, c, d, e) {
  let numbers = [a,b,c,d,e];

  return numbers.reduce ((acc, number) =>{acc * number;}, 1)
 
}
console.log(product(1,2,3,4,5))

const unshift =(letters,...array)=>
[...array,...letters]
// function unshift(array, a, b, c, d, e) {
//   return [a, b, c, d, e].concat(array);
// }

console.log(unshift([1,2,3], "a", "b", "c"))

function populatePeople(names){
  return names.map(function(name){
      name = name.split(" ");
     //const [firstName, lastName]= ["Frank", "Peterson" "Suzy", "Degual" "Liza", "Jones"]
     const [firstName, lastName]= [...name]
     const person= {firstName, lastName}
      return person
      
  })
}

const populateNames =(["Frank Peterson", "Suzy Degual", "Liza Jones"])
console.log(populatePeople(populateNames))

//populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]