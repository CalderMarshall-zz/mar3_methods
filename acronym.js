function acronym (strs) {
    var strs_new = strs.reduce(function(a, b) {
      return a + b.charAt(0);
  }," ");
  console.log(strs_new);
}
acronym(["hello", "and", "goodbye", "hello"]);
