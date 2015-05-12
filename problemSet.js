

 function frameYourPhrase(phrase) {
  var newArr = [];
  newArr = phrase.split(' ');  
  var max = newArr[0];
  var ini = 0;
  for (var i = 1; i < newArr.length; i++){
    if(newArr[i].length > max.length){
      max = newArr[i];
      ini = i;
    } 
  } 
  var longest = max.length+5; 
   
  var newStr;
  for(var j = 0; j<longest*phrase.length+2; j++) {
    
  }
   

//     **********
  //   * Hello  *
    // * World! *
    // **********

     
   //return "**********\n* Hello  *\n* World! *\n**********";
  return newArr.length+2;
}

function isPrime(num) {
    /*
      TODO: Write a functiont that decides if the integer number provided
      is prime.  In other words, the number is only divisible by 1 and
      itself.  Example of primes are 2,3,5,7,11,13,17,etc.

      If this is too challenging, hard code the first 15 prime numbers and
      return true if the number is in the list.
    */
    return false;
}


console.log(frameYourPhrase("Hello World!"));
console.log(frameYourPhrase("This should print a new box!"));

if (isPrime(5)) {
    console.log("5 is Prime");
} else {
    console.log("You made an error, 5 should be prime");
}

if (isPrime(13)) {
    console.log("13 is Prime");
} else {
    console.log("You made an error, 13 should be prime");
}

if (isPrime(10)) {
    console.log("You made an error, 10 is not Prime");
} else {
    console.log("10 is divisible by 2 and 5");
}

