function printCertificate(grade, nameArr) {
    
    printHeader();
    printName(nameArr);
    formatGrade(grade);

    function printHeader() {
        console.log('~~~-   {@}   -~~~');
        console.log('~- Certificate -~');
        console.log('~~~-  ~---~  -~~~');
    }

    function printName(nameArr) {
        console.log(nameArr[0] + ' ' + nameArr[1]);
    }

    function formatGrade(grade) {
        let desc;
        let formatedGrade = grade.toFixed(2);
    
        if (grade < 3) {
            desc = 'Fail';
            formatedGrade = 2;
        } else if (grade < 3.50) {
            desc = 'Poor';
        } else if (grade < 4.50) {
            desc = 'Good';
        } else if (grade < 5.50) {
            desc = 'Very good';
        } else {
            desc = 'Excellent';
        }
    
        console.log(`${desc} (${formatedGrade})`);
    }

    // function printCertificate(grade, nameArr) {
    //     if (pass(grade)) {
    //       printHeader();
    //       printName(nameArr);
    //       formatGrade(grade);
    //     } else {
    //       let msg = `${nameArr[0]} ${nameArr[1]} does not qualify`;
    //       console.log(msg);
    //     }
    // }
    
}

printCertificate(5.25, ['Peter', 'Carter']);
