function oneWordOnly(words){
    const newWords1= words.filter(x=> x.indexOf(" ") === -1 )
       return newWords1 // code goes here
   }
   
   console.log(oneWordOnly(["bird", "bird dog", "humming bird", "dog"])) //=>["bird", "dog"]
   console.log(oneWordOnly(["house", "tiny mansion", "humming bird", "fish", "word"])) //=>["house", "fish", "word"]


   //includes method
   