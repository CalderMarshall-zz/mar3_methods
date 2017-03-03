function range(min, max) {
  var arr = [];
  for (var i = min; i < max; i++) {
    arr.push(i);
  }
  return arr;
}

var strMultiply = function (str, times) {
  var arr = range(0 , 5);
  letter = function(range){
    return str;
  };
  combine = function(a, b){
    return a + b;
  };
  var arr_new = arr.map(letter);
  return arr_new.reduce(combine);
};
console.log(strMultiply("beer",5));
