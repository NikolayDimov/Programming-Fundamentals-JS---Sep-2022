function solve(grade) {

    let params;
    let formatedGrade = grade.toFixed(2);

    if (grade < 3) {
        params = 'Fail';
        formatedGrade = 2;

    } else if (grade < 3.50) {
        params ='Poor';
    } else if (grade < 4.50) {
        params = 'Good';
    } else if (grade < 5.50) {
        params = 'Very good';
    } else {
        params = 'Excellent';
    }
    console.log(`${params} (${formatedGrade})`);
}

solve(3.33)
solve(4.50)
solve(2.99)