multiply = function(a,b) {
  return a * b;
};
product = function(arr) {
  return arr.reduce(multiply,2);
};
console.log(product([1,5,2]));
