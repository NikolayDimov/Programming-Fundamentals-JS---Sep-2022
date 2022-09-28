function train(train) {
    let passengersInWagons = train.shift().split(" ").map(Number);
    //console.log(passeengersInWagons);

    let maxCapacity = Number(train.shift());
    //console.log(maxCapacity);
    
    for (const command of train) {
        let currCommand = command.split(" ");
        if (currCommand[0] === 'Add') {
            passengersInWagons.push(Number(currCommand[1]));
        } else {
            for (let index = 0; index < passengersInWagons.length; index++) {
                if (passengersInWagons[index] + Number(currCommand[0]) <= maxCapacity) {
                    passengersInWagons[index] += Number(currCommand[0]);
                    break;
                }   
            }
        }
    }

    console.log(passengersInWagons.join(" "));
}

train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
);

train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']
);


//______________________________________________

function train1(train) {
    let passengersInWagons = train.shift().split(" ").map(Number);
    //console.log(passeengersInWagons);

    let maxCapacity = Number(train.shift());
    //console.log(maxCapacity);
    
    
    for (let i = 0; i < train.length; i++) {
        let commandNum = train[i].split(' ');
            
        if (commandNum[0] === 'Add') {
            passengersInWagons.push(Number(commandNum[1]));
        } else {
            for (let j = 0; j < passengersInWagons.length; j++) {
                if (Number(commandNum[0]) + passengersInWagons[j] <= maxCapacity) {
                    passengersInWagons[j] += Number(commandNum[0]);
                    break;
                }
            }
        }
    }
    console.log(passengersInWagons.join(' '));
}

train1(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
);

train1(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']
);