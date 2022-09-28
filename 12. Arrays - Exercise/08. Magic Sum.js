function magicSum(array, magicNumber) {

    for (let index = 0; index < array.length; index++) {
        let currEl = array[index];

        for (let j = index + 1; j < array.length; j++) {
            let nextEl = array[j];
            let sum = currEl + nextEl;
            if (sum === magicNumber) {
                console.log(`${currEl} ${nextEl}`);
            }     
        }    
    }  
}

magicSum([1, 7, 6, 2, 19, 23], 8);
//magicSum([14, 20, 60, 13, 7, 19, 8], 27);
//magicSum([1, 2, 3, 4, 5, 6], 6);


//___________________________________

function magicSum1(array, magicNumber) {
    
    let arrayOfValidPair = [];
    let validPair = '';

    for (let i = 0; i < array.length; i++) {

        for (let j = i + 1; j < array.length; j++) {
            
            if (array[i] + array[j] === magicNumber) {
                validPair = `${array[i]} ${array[j]}`;
                arrayOfValidPair.push(validPair);
            }     
        }    
    }  

    console.log(arrayOfValidPair.join('\n'));
}

magicSum1([1, 7, 6, 2, 19, 23], 8);
//magicSum([14, 20, 60, 13, 7, 19, 8], 27);
//magicSum([1, 2, 3, 4, 5, 6], 6);