function specialNum(n) {
    for (let num = 1; num <= n; num++) {

        let result = 0;
        let numAsString = String(num);  //let numAsString = num.toString();
        
        for (let i = 0; i < numAsString.length; i++) {
            result += Number(numAsString[i]);
        }
        
        let special = false;
        
        if (result == 5 || result == 7 || result == 11) {
            special = true;
        }
        
        //console.log(result);
        
        if (special) {
            console.log(`${num} -> True`);
        } else {
            console.log(`${num} -> False`);
        }
    }       
}
specialNum(15);
//specialNum(16);
