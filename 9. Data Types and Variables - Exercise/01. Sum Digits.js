function sumDigits(input) {
    let sum = 0;
    let numberAsString = input.toString();
    for (let char of numberAsString) {
        sum += Number(char);
    }
    console.log(sum);    
}
sumDigits(245678);

//______________________

function sumDigits3(input) {
    let sum = 0;
    let numberAsString = input.toString();
    for (let index = 0; index < numberAsString.length; index++) {
        //console.log(numberAsString[index]);
        let currentDigit = Number(numberAsString[index]);
        sum += currentDigit;
        
    }
    console.log(sum);    
}

sumDigits3(245678);

//________________________________
function sumDigits1(input) {
    let sum = 0;
    let numberAsString = input.toString();
    numberAsString.split('').forEach(function (char) {
        sum += Number(char);
    });
    console.log(sum);
}
sumDigits1(245678);

//____________________________________
function sumDigits2(input) {
    let sum = 0;
    let numberAsString = input.toString();
    numberAsString.split('').map(function (char) {
        sum += Number(char);
    });
    console.log(sum);
}
sumDigits2(245678);