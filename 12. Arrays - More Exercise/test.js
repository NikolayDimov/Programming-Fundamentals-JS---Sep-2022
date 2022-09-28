function rotate(arr) {
    let rotation = arr.pop();
    //console.log(rotation);

    for (let i = 0; i < rotation; i++) {
        let lastEl = arr.pop();

        arr.unshift(lastEl);
        
    }
    console.log(arr.join(' '));
}

rotate(['1', '2', '3', '4', '2']);