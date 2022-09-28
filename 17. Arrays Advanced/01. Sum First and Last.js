function sumFirstLast(arr) {
    let first = arr.shift();
    let last = arr.pop();

    console.log(Number(first) + Number(last));  
}

sumFirstLast(['5', '10']);
sumFirstLast(['20', '30', '40']);

//___________________________

function sumFirstLast(arr) {
    let first = arr[0];
    let last = arr[arr.length - 1];

    console.log(Number(first) + Number(last));  
}

sumFirstLast(['5', '10']);
sumFirstLast(['20', '30', '40']);