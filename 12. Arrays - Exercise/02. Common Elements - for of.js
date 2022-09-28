function commonElemnts(arrayOne, arrayTwo) {
    
    for (let elem1 of arrayOne) {
        for (let elem2 of arrayTwo) {
            if (elem1 === elem2) {
                
                console.log(elem1);
            }
        }
    }
}

commonElemnts(
    ['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
);

commonElemnts(
    ['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l']
);

//______________________________

function commonElemnts1(arrayOne, arrayTwo) {
    
    for (let element of arrayOne){
        
            if (arrayTwo.includes(element)) {
                console.log(element);
            }
    }
}

commonElemnts1(
    ['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
);

commonElemnts1(
    ['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l']
);
