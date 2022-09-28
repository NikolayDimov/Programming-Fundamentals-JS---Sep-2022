function oddAndEvenSum(number) {
    //console.log(number.toString().length);

    let numberAsText = number.toString();
    
    function totalOddSum(numAsString) {
        let oddSum = 0;
        for (let index = 0; index < numAsString.length; index++) {
            let currNum = Number(numAsString[index]);
            if(currNum % 2 !== 0) {
                oddSum += currNum;
            }    
        }  
        return oddSum; 
    }

    function totalEvenSum(numAsEvenText) {
        let evenSum = 0;
        for (let index = 0; index < numAsEvenText.length; index++) {
            let currNum = Number(numAsEvenText[index]);
            if(currNum % 2 === 0) {
                evenSum += currNum;
            }    
        }  
        return evenSum; 
    }

    console.log(`Odd sum = ${totalOddSum(numberAsText)}, Even sum = ${totalEvenSum(numberAsText)}`);
}

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);


//___________for of______________

function main(number) {

    let oddSum = 0;
    let evenSum = 0;
    let numberAsString = number.toString();

    for (let char of numberAsString) {
        let currentNum = Number(char);
        //console.log(typeof currentNum);
        if (currentNum % 2 === 0) {
            evenSum += currentNum;
        } else {
            oddSum += currentNum;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

main(1000435);
main(3495892137259234);


//_________________________________

function solve(num) {
    let oddSum = 0;
    let evenSum = 0;
    let numAsString = num.toString();

    for (let el of numAsString) {
        let currentNum = Number(el);
        if (currentNum % 2 === 0) {
            evenSum += currentNum;
        } else {
            oddSum += currentNum;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
solve(1000435)