const reverseString = (string) => {
    let reverse = ''
    for (i= string.length; i > 0; --i) {
        reverse += string[i-1]
    };
    return reverse
};
console.log(reverseString('hello'));
console.log(reverseString('hello there'));
console.log(reverseString('123! abc!'));
console.log(reverseString(''));
// Do not edit below this line
module.exports = reverseString;
