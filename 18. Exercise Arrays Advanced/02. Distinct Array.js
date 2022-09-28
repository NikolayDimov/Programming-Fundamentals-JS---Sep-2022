function distinctArray(array) {
    
    for (let index = 0; index < array.length; index++) {
        let currElement = array[index];
        for (let j = index + 1; j < array.length; j++) {
            let nextElement = array[j];

            if (currElement === nextElement) {
                array.splice(j, 1);
                j = j - 1;
            }
        }
    }
    console.log(array.join(' '));
}

distinctArray([2, 3, 54, 2, 2]);


//___________________________________

function distinctArray1(array) {
    let newArray = [];
    for (let number of array) {
        if (!newArray.includes(number)) {
            newArray.push(number);
        }
    }

    console.log(newArray.join(' '));
}

distinctArray1([2, 3, 54, 2, 2]);

//________________________________

function distinctArray2(arr) {
    let resultArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (!resultArray.includes(arr[i])) {
            resultArray.push(arr[i]);
        }
    }
    console.log(resultArray.join(' '));
}

distinctArray2([2, 3, 54, 2, 2]);