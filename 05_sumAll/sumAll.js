const sumAll = (min,max) => {
    let sum = 0;
    for (i= Math.min(min, max); i< Math.max(min, max) + 1; i++) {
        sum += i
    };
    return sum;
};
console.log(sumAll(1, 4));
console.log(sumAll(123, 1));
console.log(sumAll(-10, 4));
console.log(sumAll(-10, "90"));
console.log(sumAll(10, [90, 1]));



// Do not edit below this line
module.exports = sumAll;
