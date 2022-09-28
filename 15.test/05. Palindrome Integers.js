function solve(arr) {
    for (let n of arr) {
        let current = String(n);
        let reverse = String(n).split('').reverse().join('');
        

        if (current === reverse) {
            console.log(true);
        } else {
            console.log(false);
        }
    }

}

solve([123,323,421,121])