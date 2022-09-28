function houseParty(input) {
    let list = [];

    for (let element of input) {
        let tokens = element.split(' ');
        //console.log(tokens);
        let name = tokens[0];
        
        if (tokens.length === 3) {
            let isIncluded = list.includes(name);
            if (isIncluded) {
                console.log(`${name} is already in the list!`);
            } else {
                list.push(name);
            }
        } else {
            let indexOfPerson = list.indexOf(name);
            if (indexOfPerson !== -1) {
                list.splice(indexOfPerson, 1)
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }

    console.log(list.join('\n'));
}

houseParty(
['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']
);

// houseParty(
// ['Tom is going!',
// 'Annie is going!',
// 'Tom is going!',
// 'Garry is going!',
// 'Jerry is going!']
// )

//_____________________________

function party(arr) {
    
    let resultArray = [];

    for (let element of arr) {
        let command = element.split(' ');
        let name = command[0];

        if (command.length === 3) {
            if (resultArray.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                resultArray.push(name);
            } 
        } else {
            if (!resultArray.includes(name)) {
                console.log(`${name} is not in the list!`);
            } else {
                let index = resultArray.indexOf(name);
                resultArray.splice(index, 1);
            }
        }
    }
    console.log(resultArray.join('\n'));
}

party(
    ['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']
    );