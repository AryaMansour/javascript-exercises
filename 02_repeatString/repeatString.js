const repeatString = (string, num) => {
    let sumString = ''
    for (i=0;i<num;i++) {
        sumString += string
    };
    return sumString;
};
console.log(repeatString('hey', 3));
console.log(repeatString('hey', 10));
console.log(repeatString('hey', 1));
console.log(repeatString('hey', 1));
console.log(repeatString('hey', 0))
console.log(repeatString('hey', -1))


// Do not edit below this line
module.exports = repeatString;
