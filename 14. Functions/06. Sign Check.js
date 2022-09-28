function singCheck(n1, n2, n3) {
    let result = n1 * n2 * n3;

    //console.log(result);

    if (result >= 0) {
        console.log('Positive');
    } else {
        console.log('Negative');
    }
}

singCheck(5, 12, -15);
singCheck(-6, -12, 14);