// while array has more then 1 element
// -for every elemnt in the array, except the last, sum with next elemnt

function condense(arr) {
    //копие на масива arr
    let arrCopy = [];
    for (let n of arr) {
        arrCopy.push(n);
    }
    // console.log(arr);
    // console.log(arrCopy);

    // копие на масива arr със slice()
    // let copyArr = arr.slice();
    // console.log(copyArr);

    while (arrCopy.length > 1) {
        let tempArray = [];
        for (let i = 0; i < arrCopy.length - 1; i++) {
            tempArray.push(arrCopy[i] + arrCopy[i + 1]);  // tempArray[i] = arrCopy[i] + arrCopy[i + 1];
        }
        arrCopy = tempArray;
    }
    console.log(arrCopy.join());  
}

condense([2,10,3]);
console.log('---');
condense([5,0,4,1,2])
console.log('---');
condense([1]);