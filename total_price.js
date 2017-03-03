var products = [
  { name: 'Basketball', price: 12.00 },
  { name: 'Tennis Racquet', price: 66.00 },
  { name: 'Tennis Balls', price: 9.00 },
  { name: 'Tennis Balls', price: 9.00 }
];
function get_price(arr) {
  return arr.price;
}
function sum(a, b) {
  return a + b;
}
function total(products) {
  var prices = products.map(get_price);
  return prices.reduce(sum);
}
console.log(total(products));
