function solve(grade) {
    if (grade >= 5.50) {
        console.log('Excellent');
    } else {
        console.log('Not excellent');
    } 
}
solve(5.50);
solve(4.35);


function solve1(grade) {
    console.log(grade >= 5.50 ? 'Excellent' : 'Not excellent');
}
solve1(5.50);
solve1(4.35);