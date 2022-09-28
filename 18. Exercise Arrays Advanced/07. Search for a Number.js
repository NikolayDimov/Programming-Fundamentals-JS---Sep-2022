function numberSearch(array, input) {
    let numbersToTakeFromArr = input[0];
    let deleteNumbersFromArr = input[1];
    let searchedNumber = input[2];

    let myNewArr = array.splice(0, numbersToTakeFromArr);
    myNewArr = myNewArr.splice(deleteNumbersFromArr);
    //console.log(myNewArr);

    let count = 0;
    for (let index = 0; index < myNewArr.length; index++) {
        if (myNewArr[index] === searchedNumber) {
            count++;
        }
    }

    console.log(`Number ${searchedNumber} occurs ${count} times.`);
}

numberSearch([5, 2, 3, 4, 1, 6],
    [5, 2, 3])

numberSearch([7, 1, 5, 8, 2, 7],
    [3, 1, 5])