let decodedString = '';
const caesarDecode = (string, shift) => {
    for (i=0; i < string.length; i++) {
        decodedString += String.fromCharCode((string.charCodeAt(i) + shift))
    };
    return decodedString
};


// Do not edit below this line
module.exports = caesar;
