function numbres(sequence) {
    let arrOfString = sequence.split(' ');
   
    let arrOfNum = [];
    let sum = 0;
    for (let el of arrOfString) {
        let currntNum = Number(el);
        arrOfNum.push(currntNum);
        sum += currntNum;
    }

    let avg = sum / arrOfNum.length;
    //console.log(avg);

    let graterThanTheAverage = [];
    for (let el of arrOfNum) {
        if (el > avg) {
            graterThanTheAverage.push(el);
        }
    }
    //console.log(graterThanTheAverage);

    let sorted = graterThanTheAverage.sort((a, b) => b - a);
    if (sorted.length > 0) {
        console.log(sorted.slice(0, 5).join(' '));
    } else {
        console.log('No');
    }  
}

numbres('10 20 30 40 50');
numbres('5 2 3 4 -10 30 40 50 20 50 60 60 51');
numbres('-1 -2 -3 -4 -5 -6');
numbres('1');


//_________________short_______________________

function numbres(sequence) {
    let arrOfNum = sequence.split(' ').map(Number);
   
    let sum = 0;
    for (let el of arrOfNum) {
        sum += el;
    }

    let avg = sum / arrOfNum.length;

    let arrOfNumber = arrOfNum
        .filter(el => el > avg)
        .sort((a, b) => b - a)
        .slice(0, 5)
        .join(' ');

    
    console.log(arrOfNumber.length > 0 ? arrOfNumber : 'No');  
}

numbres('10 20 30 40 50');
numbres('5 2 3 4 -10 30 40 50 20 50 60 60 51');
numbres('-1 -2 -3 -4 -5 -6');
numbres('1');