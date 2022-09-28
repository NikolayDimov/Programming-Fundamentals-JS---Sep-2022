function arrayManipulator(numbers, commands) {
    for (let command of commands) {
        let tokens = command.split(' ');
        let currCommand = tokens[0];
        if (currCommand === 'add') {
            let index = Number(tokens[1]);
            let element = Number(tokens[2]);
            numbers.splice(index, 0 ,element);
        } else if (currCommand === 'addMany') {
            let index = Number(tokens[1]);
            tokens.splice(0, 2);
            let numbersToAdd = tokens.map(Number);
            numbers.splice(index, 0, ...numbersToAdd);
            
        } else if (currCommand === 'contains') {
            let result = numbers.indexOf(Number(tokens[1]));
            console.log(result);
        } else if (currCommand === 'remove') {
            let index = Number(tokens[1]);
            numbers.splice(index, 1);
        } else if (currCommand === 'shift') {
            let position = Number(tokens[1]);
            for (let index = 0; index < position; index++) {
                let firstNumber = numbers.shift();
                numbers.push(firstNumber);
            }
        } else if (currCommand === 'sumPairs') {
            let resultArr = [];
            if (numbers.length % 2 !== 0) {
                numbers.push(0);
            }
            for (let index = 0; index < numbers.length - 1; index += 2) {
                let sum = numbers[index] + numbers[index + 1];
                resultArr.push(sum);
            }
            numbers = resultArr;
        } else if (currCommand === 'print') {
            console.log(` [ ${numbers.join(', ')} ]`);
        }
    }
}

// arrayManipulator(
//     [1, 2, 3, 4, 5],
//     ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
//     );

arrayManipulator(
    [1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print']
    )


//__________________________________

function arrayManipulator1(nums, commands) {
    
    for (let i = 0; i < commands.length; i++) {
        let currentValues = commands[i].split(' ');
        //console.log(currentValues);
        let currentCommand = currentValues.shift();
        currentValues = currentValues.map(Number);
        
        let sumPairs = 0;
        let pairsOfSumNums = [];

        switch (currentCommand) {
            case 'add': 
                let indexToAdd = currentValues[0];
                let elementToAdd = currentValues[1];
                nums.splice(indexToAdd, 0, elementToAdd);
                break;
            case 'addMany': 
                let indexToAddMany = currentValues.shift();
                nums.splice(indexToAddMany, 0, ...currentValues);
                break;
            case 'contains':
                console.log(nums.indexOf(currentValues[0]));
                break;
            case 'remove': 
                let indexToRemove = currentValues[0];
                nums.splice(indexToRemove, 1);
                break;
            case 'shift': 
                for (let i = 0; i < currentValues[0]; i++) {
                    nums.push(nums.shift());  
                }
                break;
            case 'sumPairs':
                if (nums.length % 2 !== 0) {
                    nums.push(0);
                } 
                for (let i = 0; i < nums.length; i += 2) {
                    sumPairs = nums[i] + nums[i + 1];
                    pairsOfSumNums.push(sumPairs);                  
                }
                nums = [...pairsOfSumNums];
                break;
            case 'print': 
                console.log(`[ ${nums.join(', ')} ]`);
                break;
        } 
    }
}

arrayManipulator1([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print']
    );
