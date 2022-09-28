function multiplicationTable(num) {

    for (let x = 1; x <= 10; x++) {
        let product = num * x;
        console.log(`${num} X ${x} = ${product}`);  
    }
}

multiplicationTable(5);