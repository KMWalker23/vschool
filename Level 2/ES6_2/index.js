const name = "John"
const age = 101

function runForLoop(pets) {
    let petObjects = []
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}


runForLoop(["cat", "dog"])



// Re-write this `.map()` using an arrow function:

//Be aware that if JavaScript sees a `{` directly after the `=>` it will think it's starting a function, and not starting an object,
// so the `:` will be an unexpected symbol.


const carrots = ["bright orange", "ripe", "rotten"]
function mapVegetables(arr) {
    return arr.map(carrot => {
        return  {type: "carrot", 
        name: carrot } 
      })
    }

console.log(mapVegetables(carrots))


// Re-write this .filter() ’s callback function using an arrow function:

const people = [
  {
      name: "Princess Peach",
      friendly: false
  },
  {
      name: "Luigi",
      friendly: true
  },
  {
      name: "Mario",
      friendly: true
  },
  {
      name: "Bowser",
      friendly: false
  }
]

function filterForFriendly(arr) {
  return arr.filter(person => {
      return person.friendly
  })
}
console.log(filterForFriendly(people))

const doMathSum = (a, b) => {
  return a + b
}

console.log(doMathSum(5,4))


const produceProduct = (a, b) => {
  return a * b
}
console.log(produceProduct(5,6))

//Write a printString function that takes firstName, 
//lastName, and age as parameters and returns a string like the following:
//firstName should default to "Jane"lastName should default to "Doe"age 
//should default to 100

const aged= 100 

function greet(name, greeting = "Hi ") {
  return greeting + "," + name + "how does it feel to be " + aged
}
console.log(greet('Jane Doe ', 'Hi', '100'))

//Hi Kat Stark, how does it feel to be 40?