const add = function(one, two) {
  return one + two;
};

const subtract = function(one, two) {
  return one - two;
};

//Problem with this 
const sum = function sum(){
  let sum =0; 
  for(i=0;i<arguments.length;i++){
     sum += arguments[i];
  }
   return sum;
}
//something wrong with this
const multiply = function(one, two) {
  return (one * two);
};
//this works
const power = function(one, two) {
	return one ** two;
};,et
//This works
const factorial = (num) => {
  let result = num 
  while (num > 1) {
      num--
      result = result * num
  };
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
