function distanceBetweenPoints1(arr) {
    let x1 = arr[0];
    let y1 = arr[1];
    let x2 = arr[2];
    let y2 = arr[3];
    // we will use pythagorean theorem
    // a^2 + b^2 = c^2
    // a & b are both sides of 90 deg triangle
    // c = Math.Sqrt(x^2 + b^2)
    // is the hypotenuse
    let a = Math.abs(x1 - 0);
    let b = Math.abs(y1 - 0);

    // distance is "c"
    let distance = Math.sqrt((a * a) + (b * b));
    //console.log(distance);

    if (distance % 1 === 0) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    let c = Math.abs(x2 - 0);
    let d = Math.abs(y2 - 0);

    // distance is "c"
    let distance1 = Math.sqrt((c * c) + (d * d));
    //console.log(distance1);

    if (distance1 % 1 === 0) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    let e = Math.abs(x1 - x2);
    let f = Math.abs(y1 - y2);

    // distance is "c"
    let distance2 = Math.sqrt((e * e) + (f * f));
    //console.log(distance2);

    if (distance2 % 1 === 0) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

distanceBetweenPoints1([3, 0, 0, 4]);
console.log('-------------');
distanceBetweenPoints1([2, 1, 1, 1]);