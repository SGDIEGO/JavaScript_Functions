function factorial(n) {
  if (n == 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120 (5! = 5 * 4 * 3 * 2 * 1)
console.log(factorial(3)); // Output: 6 (3! = 3 * 2 * 1)

function fibonacci(n) {
  if (n == 1) return 1;
  if (n == 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5)); // Output: 5 (0, 1, 1, 2, 3, 5)
console.log(fibonacci(7)); // Output: 13 (0, 1, 1, 2, 3, 5, 8, 13)

function sumArray(arr) {
  const first = arr.shift();
  if (first == undefined) return 0;
  return first + sumArray(arr);
}

console.log(sumArray([1, 2, 3, 4])); // Output: 10
console.log(sumArray([5, 10, 15])); // Output: 30

function flatten(arr) {
  let r = [];

  for (const v of arr) {
    if (typeof v == "number") {
      r.push(v);
    } else {
      r.push.apply(r, flatten(v));
    }
  }

  return r;
}

console.log(flatten([1, [2, [3, 4], 5], 6])); // Output: [1, 2, 3, 4, 5, 6]
console.log(
  flatten([
    [1, 2],
    [3, [4, [5]]],
  ])
); // Output: [1, 2, 3, 4, 5]
