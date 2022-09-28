function sorting(array) {
    // console.log('before sorting the array', array);

    // array = array.sort((a, b) => b - a)
    // console.log('before after the array', array);
    
    let newArr = [];

    while (array.length > 0) {
        let biggerNum = array.shift();
        //console.log(biggerNum);
        newArr.push(biggerNum);
        let smallerNum = array.pop();
        newArr.push(smallerNum);
        //console.log(smallerNum);
    }

    console.log(newArr.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);