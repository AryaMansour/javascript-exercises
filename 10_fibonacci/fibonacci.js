const fib = function fib(n){
    return new Array(n).fill(1).reduce((arr, _ ,i) => {
        arr.push((i <= 1) ? i : arr[i-2] + arr[i-1])
        return arr
    },[]) ;
  }
// Do not edit below this line
module.exports = fibonacci;
