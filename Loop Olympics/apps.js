//Preliminaries//

for(var i=0;i<=9;i++){
    console.log(i)
    
}

for(var i=9;i>=0;i--){
    console.log(i)
}

var fruit = ["banana", "orange", "apple", "kiwi"]

for(var i= fruit.length; i=0; i++){
    console.log(fruit[i])
}

//Bronze//

//Write a for loop that will push the numbers 0 through 9 to an array.

var numbers= "123456789" 
var splitNumbers = numbers.split("")
console.log(splitNumbers)


//Write a for loop that prints to the console only even numbers 0 through 100.

for(var i=0; i<=100;i++){
    if([i]%2===0)
    console.log(i)
}

//Write a loop that will push every other fruit to an array

var newfruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
