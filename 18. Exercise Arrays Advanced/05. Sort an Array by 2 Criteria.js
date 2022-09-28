function sorting2Criteria(arr) {
    
    let sortedArray = arr.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    });

    sortedArray.forEach(element => {
        console.log(element);
    });
}

sorting2Criteria(['alpha', 'beta', 'gamma']);
//sorting2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);

//____________________________

function sorting2Criteria1(arr) {
    
    let sortedArray = arr.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    });

    console.log(sortedArray.join('\n'));
}

sorting2Criteria1(['alpha', 'beta', 'gamma']);
//sorting2Criteria1(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);