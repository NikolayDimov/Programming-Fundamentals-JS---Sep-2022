function loadingBar(number) {
    
    let completed = '%'.repeat(number / 10);
    let incomplete = '.'.repeat(10 - completed.length);
    //console.log(completed + incomplete);

    if (incomplete.length === 0) {
        console.log('100% Complete!');
    } else {
        console.log(`${number}% [${completed}${incomplete}]`);
        console.log('Still loading...');
    }
}

loadingBar(30);
loadingBar(100);