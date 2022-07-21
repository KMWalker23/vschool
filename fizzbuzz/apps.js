function fizzBuzz() {
    var arr =[]

    for (let i = 0; i<=100; i++){
   
         if(i % 15 ==0) { 
    console.log("FizzBuzz")
    arr.push("fizzbuzz")
    continue;
}
        else if (i % 3===0){
    console.log("fizz")
    arr.push("fizz")
    continue;

}
        else if(i % 5===0){
    console.log("buzz")
    arr.push("buzz")
    continue;

}

    else console.log(i)
}
return arr
}

var arr1 = fizzBuzz()
console.log(arr1)