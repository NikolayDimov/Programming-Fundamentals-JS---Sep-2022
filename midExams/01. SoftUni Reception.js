function softuniReception(input) {
    // parse input
    let e1 = Number(input[0]);
    let e2 = Number(input[1]);
    let e3 = Number(input[2]);
    let efficiency = e1 + e2 + e3;
    let students = Number(input[3]);
    let time = 0;


    // repeat until all students are ansewered
    while (students > 0) {
        // - record current time
        time++;
        // - if is not break time subtrack efficiency from remaining students
        if (time % 4 !== 0) {
            students -= efficiency;
        }
    }

    // print
    console.log(`Time needed: ${time}h.`);
}

softuniReception(['5','6','4','20']);
softuniReception(['1','2','3','45']);
softuniReception(['3','2','5','40']);