
//Write a function that returns the sum of two numbers. 
function sum(x,y) {
    return x + y
}
const total = sum(1,2)
console.log(total)

try{
    if (total !== 5){
        throw new Error ("this is an error!")
        }
    console.log("Did I console log?")

}
catch(err){
    console.log(err)
}
finally{
    console.log("I am running!")
}

  //1b) Call the sum function inside a try block using "1" and "2" as arguments. 
  //Use console.log within a catch block to inform the user of the error.




  //2a) Given a user object, write a function called login that takes a username and password as parameters. 
  //Throw an error if either of them don't match.
  // Otherwise, log to the console a message saying "login successful!"

  var user = {username: "sam", password: "123abc"};
function login(username, password){
  //check credentials
}

//2b) Call the login function within a try block. In one instance use the correct 
//credentials, and in another use incorrect ones. Make sure you see the appropriate message!

  




