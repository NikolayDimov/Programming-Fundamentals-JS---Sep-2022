function orders(product, quantity) {
    
    let some = function(product, quantity) {
        let result = 0;
        if (product === 'coffee') {
            result = quantity * 1.50; 
        } else if (product === 'water') {
            result = quantity * 1;
        } else if (product === 'coke') {
            result = quantity * 1.40;
        } else if (product === 'snacks') {
            result = quantity * 2; 
        }
        return result;
    }
    
    console.log(some(product, quantity).toFixed(2));
}

orders("water", 5); 
orders("coffee", 2); 

//__________________________
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