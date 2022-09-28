function smallestNumber(num1, num2, num3) {
    let smallestNum = function(num1, num2, num3) {
        let smallestNum = 0;
        if (num1 <= num2 && num1 < num3) {
            smallestNum = num1;
        } else if (num2 <= num1 && num2 <= num3) {
            smallestNum = num2;
        } else {
            smallestNum = num3;
        } 
        return smallestNum;  
    }
    console.log(smallestNum(num1, num2, num3));
}

smallestNumber(2, 5, 3);
smallestNumber(600, 342, 123);

//_____________________________

function smallestNumber1(num1, num2, num3) {
    let smallestNum = Math.min(num1, num2, num3);
    console.log(smallestNum);
    //return smallestNum;
}

smallestNumber1(2, 5, 3);
smallestNumber1(600, 342, 123);

//____________________________

function smallestNumber2(num1, num2, num3) {
    let smallestNum = (a, b, c) => Math.min(num1, num2, num3);
    console.log(smallestNum(num1, num2, num3));
}

smallestNumber2(2, 5, 3);
smallestNumber2(600, 342, 123);