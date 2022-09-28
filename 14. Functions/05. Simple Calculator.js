function simpleCalculator(x, y, operator) {
    let result;

    switch (operator) {
        case 'multiply': result = x * y; break;
        case 'divide': result = x / y; break;
        case 'add': result = x + y; break;
        case 'subtract': result = x - y; break;
    }

    console.log(result);
}

simpleCalculator(5, 5, 'multiply');
simpleCalculator(40, 8, 'divide');
simpleCalculator(12, 19, 'add');
simpleCalculator(50, 13, 'subtract');

//____________________ without if or switch

function simpleCalculator1(num1, num2, operator) {
    let result;

    switch (operator) {
        case 'multiply': result = (num1, num2) => num1 * num2; break;
        case 'divide': result = (num1, num2) => num1 / num2; break;
        case 'add': result = (num1, num2) => num1 + num2; break;
        case 'subtract': result = (num1, num2) => num1 - num2; break;
    }

    console.log(result(num1, num2));
}

simpleCalculator1(5, 5, 'multiply');
simpleCalculator1(40, 8, 'divide');
simpleCalculator1(12, 19, 'add');
simpleCalculator1(50, 13, 'subtract');