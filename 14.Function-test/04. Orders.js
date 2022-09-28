function solve(product, order) {
    let total = 0;
    switch (product) {
        case 'coffee': total = order * 1.50; break;
        case 'water': total = order * 1.00;break;
        case 'coke': total = order * 1.40;break;
        case 'snack': total = order * 2.00;break;
    }
    console.log(total.toFixed(2));
}

solve("water", 5);
solve("coffee", 2);