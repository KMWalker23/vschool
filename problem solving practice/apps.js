[5,6,7,4,2]
const lettersWithStrings = ["#3", "$$$", "C%4!", "Hey!"];
const char = "!"

const emptyArray =[]

function lws (lettersWithStrings,char){
    for(var i=0; i< lettersWithStrings.length; i++){

        if(lettersWithStrings[i].includes(char)){
            emptyArray.push(lettersWithStrings[i]);
        }
    }
    return emptyArray;
}
console.log(lws(lettersWithStrings, char))