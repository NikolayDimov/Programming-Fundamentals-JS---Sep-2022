function echo(param) {
    let type = typeof(param);
    // let type = typeof(param);
    // print data type
    console.log(type);
    
    // print value, if the type is string or number
    if (type == 'string' || type == 'number') {
        console.log(param);
    } else {
        // otherwise, print error message
        console.log('Parameter is not suitable for printing');
    }
}
echo('Hello, JavaScript!');
echo(18);
echo(null);
echo(true);