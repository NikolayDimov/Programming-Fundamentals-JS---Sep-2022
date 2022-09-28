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