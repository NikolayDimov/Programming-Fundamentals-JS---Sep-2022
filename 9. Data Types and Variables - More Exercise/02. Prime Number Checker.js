function numChecker(num) {
    if (num % num === 0 && num % 1 === 0 && num % 2 === 0) {
        console.log(false);
    } else {
        console.log(true);
    }
}

numChecker(7);
numChecker(8);
numChecker(81);
console.log('-------------');


//_______________________________
function numChecker1(num) {
    if (num % num === 0 && num % 1 === 0 && num % 2 === 0) {
        return false;
    } else {
        return true;
    }
}

console.log(numChecker1(7)); 
console.log(numChecker1(8)); 
console.log(numChecker1(81)); 
console.log('-------------');

//_________________________
//const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}
//console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]
console.log(isPrime(7)); 
console.log(isPrime(8)); 
console.log(isPrime(81)); 

//---------------------------
function solve(number) {
  let isPrime = true;
  if (number < 2) {
    isPrime = false;
  }
  for (let i = 2; i * i <= number; i++) {
    if (number % i == 0) {
      isPrime = false;
      break;
    }
    isPrime = true;
  }
  console.log(isPrime);
}
solve(7);
solve(8);
solve(81);
