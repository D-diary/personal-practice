const months = ['Jan', 'March', 'April', 'June'];
const z = months.splice(1, 1, 'Feb');
console.log('z', z);
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
