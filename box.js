//  RANGE FUNCTION
function range(min, max) {
  var arr = [];
  for (var i = min; i < max; i++) {
    arr.push(i);
  }
  return arr;
}
//  MAIN BOX FUNCTION
var box = function (width, height) {
     // SETTING SKELETON ARRAYS FOR WIDTH AND HEIGHT OF ASTERISK BOX, WHICH WILL BE PASSED IN FUNCTION
  var arr_width = range(0 , width);
  var arr_height = range(0,height);


          // MAPPING NUMBERS INTO STARS
  var arr_stars = arr_width.map(function (x) {
    return "*";

  });
  // REDUCING STARS TO ONE STRING
  var arr_reduced = arr_stars.reduce(function (x, y) {
    return x + y;
  });
  // PRITING SET OF REDUCED  STARS WITH FOREACH BY AMOUNT OF HEIGHT PARAMETER
  arr_height.forEach(function(x){
    console.log(arr_reduced);
  });

  // OR RUN THIS WITH THE MAP FUNCTION, AND RETURN ARR_NEW2

  // var arr_new2 = arr_height.map(function(x){
  // return arr_reduced;
  // });
  return arr_reduced;
};
console.log(box(50, 20));
