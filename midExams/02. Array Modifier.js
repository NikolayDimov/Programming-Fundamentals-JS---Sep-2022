function solve(input) {
    // parse input
    let nums = input.shift().split(' ').map(Number);

    // until end parse and execute command
    while (input[0] !== 'end') {
        let tokens = input.shift().split(' ');
        let command = tokens[0];
        //console.log(command);
        let index1 = Number(tokens[1]);
        let index2 = Number(tokens[2]);

        switch (command) {
            // - swap elements
            case 'swap':
                let temp = nums[index1];
                nums[index1] = nums[index2];
                nums[index2] = temp;
                break;
            // - multiply and store at first index
            case 'multiply':
                let index1 = Number(tokens[1]);
                let index2 = Number(tokens[2]);
                break;
            // - decrease all value by 1
            case 'decrease':
                for (let i = 0; i < nums.length; i++) {
                    nums[i]--;
                    
                }
                break;     
        }
    }
   

    // print
    console.log(nums.join(', '));

}

solve( [
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ]);

  console.log('-----------------');

  solve([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ]);