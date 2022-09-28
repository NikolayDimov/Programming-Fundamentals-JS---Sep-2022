function arrayCopy(arr) {
    console.log(arr);
   
    //копие на масива arr
    let arrCopy = [];
    for (let element of arr) {
        arrCopy.push(element);
    }
    console.log(arrCopy);

    //копие на масива arr със slice()
    let copyArrSlice = arr.slice();
    console.log(copyArrSlice);
}

arrayCopy([1, 2, 3, 4]);