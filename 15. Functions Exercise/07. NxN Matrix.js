function matrix(times) {
    let matrix = [];

    for (let i = 0; i < times; i++) {
       
        let row = [];

        for (let j = 0; j < times; j++) {
            row.push(times);
            //console.log(row); 
        }
        matrix.push(row.join(' '));
    }
    console.log(matrix.join('\n'));
}

matrix(3);
matrix(7);