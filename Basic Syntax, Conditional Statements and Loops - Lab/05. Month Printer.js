function solve(integer) {
    if (integer === 1) {
        console.log('January');  
    } else if (integer === 2) {
        console.log('February');
    } else if (integer === 3) {
        console.log('March');
    } else if (integer === 4) {
        console.log('April');
    } else if (integer === 5) {
        console.log('May');
    } else if (integer === 6) {
        console.log('June');
    } else if (integer === 7) {
        console.log('July');
    } else if (integer === 8) {
        console.log('August');
    } else if (integer === 9) {
        console.log('September');
    } else if (integer === 10) {
        console.log('October');
    } else if (integer === 11) {
        console.log('November');
    } else if (integer === 12) {
        console.log('December');
    } else {
        console.log('Error!');
    }
}
solve(1);
solve(5);
solve(13);

function solve1(index) {
    switch (index) {
        case 1: console.log('January'); break;
        case 2: console.log('February'); break;
        case 3: console.log('March'); break;
        case 4: console.log('April'); break;
        case 5: console.log('May'); break;
        case 6: console.log('June'); break;
        case 7: console.log('July'); break;
        case 8: console.log('August'); break;
        case 9: console.log('September'); break;
        case 10: console.log('October'); break;
        case 11: console.log('November'); break;
        case 12: console.log('December'); break;
        default: console.log('Error!');; break;
    }
}
solve1(5);
solve1(12);
solve1(14);
