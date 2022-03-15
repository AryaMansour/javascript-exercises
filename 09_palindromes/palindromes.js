const palindromes = (string) => {
    string = string.toUpperCase().replace(/[^\w\s]|_/g, '').replace(/\s/g, "");
    let reverse = '';
    for (i=string.length -1; i>-1; i--) {
        reverse += string[i];
    }
    if (string === reverse) {
        return true
    } else {
        return false
    };
};

// Do not edit below this line
module.exports = palindromes;
