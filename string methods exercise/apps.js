//Write a function that takes a string as a parameter and returns the same string in all capital letters followed by all lowercase letters.

var Name = "john"
var Upper = Name.toUpperCase()
var newName = Name.concat(Upper)
console.log(newName)

//Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down.
var game = "Game Time Has Arrived"
var indexOfH = game.indexOf("H")
console.log(indexOfH)


//Write a function that uses slice() and the other functions you've written to return the first half of the given string.
var firstGame = game.slice(0, 13)
console.log(firstGame)


//Write a function that takes a string as a parameter and returns that string where the first half is capitalized, and the second half is lowercase.
var gameUpper = game.toUpperCase()
var gameLower = game.toLowerCase()

var newGame = gameUpper.concat(gameLower)
console.log(newGame)



//=math.floor(x)
//capilizeAndLowercase("HelLo") // => "HELLOhello"
//findMiddleIndex("Hello") // => 2
//findMiddleIndex("Hello World") // => 5
//returnFirstHalf("Hello") // => "He"
//returnFirstHalf("Hello World") // => "Hello"
//capilizeAndLowercase("Hello") // => "HEllo"
//capilizeAndLowercase("Hello World") // => "HELLO world"