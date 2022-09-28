function print(arr) {
    let lastNum = arr.pop();
    let resultArr = [];

    for (let index in arr) {
        
        if (index % lastNum === 0) {
            resultArr.push(arr[index]);
        }
    }
    console.log(resultArr.join(' '));
}

print(['5', '20', '31', '4', '20', '2']);
print(['dsa', 'asd', 'test', 'test', '2']);
print(['1', '2', '3', '4', '5', '6']);

// For of взема елементите на масива
// For in взема индексите от масива