function solve(n1, n2, n3) {
    let sum = n1 + n2;
    let subtract = sum - n3;
    console.log(subtract);
}

solve(23,6,10);

//____________________________

function solve1(n1, n2, n3) {
    function add (a, b) {
        return a + b
    }
    function subtract(a, b) {
        return a - b;
    }

    let sum = add(n1, n2);
    let sub = subtract(sum, n3);

    console.log(sub);
}

solve1(23,6,10);