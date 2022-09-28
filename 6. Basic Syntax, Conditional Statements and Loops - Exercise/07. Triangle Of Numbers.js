function triangle(num) {
    for (let row = 1; row <= num; row++) {
        let line = '';
        for (let col = 1; col <= row; col++) {
            line += row;
            if (col !== row) {
                line += ' ';
            }
        }
        console.log(line);
    }
}

triangle(5)

//___________________________________________

function triangle1(num) {
    for (let row = 1; row <= num; row++) {
        let line = '';
        for (let col = 1; col <= row; col++) {
            line += `${row} `;
        }
        console.log(line);
    }
}

triangle1(5)