function range(min, max) {
  var arr = [];
  for (var i = min; i < max; i++) {
    arr.push(i);
  }
  return arr;
}

var box = function (width, height) {
  var arr = range(0 , width);
  letter = function(){
    return "*";
  };


  var arr_new = arr.map(letter);
  return arr_new;
};
console.log(box(5, 5));
