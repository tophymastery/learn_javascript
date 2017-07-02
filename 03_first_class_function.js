// functions are treated the same way as objects
//  - can be assigned to variables, array values, object values
//  - can be passed as arguments to other function
//  - can return from functions
// allow for the creation of higher-order functions
//  - map(), filter(), reduce()

// 1 example map() - Array.prototype.map()
var x = [1, 2, 3, 4]
var doubleVal = (x) => x * 2
console.log(
  x.map(doubleVal)
);

// 2 example filter() - Array.prototype.filter()
var isEven = (x) => (x % 2) === 0
console.log(
  x.filter(isEven)
);

// 2 example reduce() - Array.prototype.reduce()
var accumulate = (prev, cur) => prev + cur
console.log(
  x.reduce(accumulate, 0)
);