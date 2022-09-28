function addAndSubtract(num1, num2, num3) {
    
    function add(firstNum, secondNum) {
        return firstNum + secondNum;
    }

    function subtract (a, b) {
        return a - b;
    }

    let result = add(num1, num2);
    let finalResult = subtract(result, num3);
    
    console.log(finalResult);
}

addAndSubtract(23, 6, 10);
addAndSubtract(1, 17, 30);
addAndSubtract(42, 58, 100);

//______________________________

function addAndSubtract1(num1, num2, num3) {
    
    let add = (firstNum, secondNum) => {
        return firstNum + secondNum;
    }
    // let add = (num1, num2) => {   // може да кръстим променливите както искаме
    //     return num1 + num2;
    // }

    let substract = (result, thirdNum) => {
        return result - thirdNum;             // няма значение какви са имената на променливите
    }                                           // (а, b) => а - b; също ще работи
                                                         
    let result = add(num1, num2);
    let finalResult = substract(result, num3); // важно е какво подаваме на функцията
    
    console.log(finalResult);
}

addAndSubtract1(23, 6, 10);
addAndSubtract1(1, 17, 30);
addAndSubtract1(42, 58, 100);


//_____________________________
function solve(n1, n2, n3) {
    function sum(x, y) {
        return x + y;
    }

    function subtract(x, y) {
        return x - y;
    }

    let sumResult = sum(n1, n2);
    let sumSubtract = subtract(sumResult, n3);
    console.log(sumSubtract);
}
solve(23, 6, 10)