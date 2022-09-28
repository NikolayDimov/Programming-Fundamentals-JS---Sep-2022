function cone(radius, height) {
    let volume = (1 / 3) * Math.PI * Math.pow(radius, 2) * height;

    console.log(`volume = ${volume.toFixed(4)}`);

    // let area = L + B = πrs + πr2 = πr(s + r) = πr(r + √(r2 + h2))
}

cone(3, 5);

//____________________________________
function solve(r, h) {
    let volume = 1 / 3 * (Math.pow(r, 2) * Math.PI) * h;
    let i = Math.sqrt(Math.pow(r, 2) + Math.pow(h, 2))
    let letaralArea = Math.PI * r * i
    let baseArea = Math.PI * (Math.pow(r, 2));
    let area = letaralArea + baseArea;
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}
solve(3, 5)