function strJoin (strs) {
    var strs_new = strs.reduce(function(a, b, sep) {
      sep = " ";
      return a + sep + b;
  });
  console.log(strs_new);
}
strJoin(["hello", "and", "goodbye"]);
