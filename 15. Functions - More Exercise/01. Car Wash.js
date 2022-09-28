function carWash(array) {
    let result = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'soap') {
            result += 10; 
        } else if (array[i] === 'water') {
            result += 2;
        } else if (array[i] === 'vacuum cleaner') {
            result += 2.5;
        } else if (array[i] === 'mud') {
            result -= 1;
        }
        
    }
    console.log(`The car is ${result.toFixed(2)}% clean.`);
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);