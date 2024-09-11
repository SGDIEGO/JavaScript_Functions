// Beginner exercises
function createSimpleCounter() {
  let variable = 0;
  return () => {
    variable++;
    return variable;
  };
}

const counter = createSimpleCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2

function greet(name) {
  return (mssg) => {
    console.log(mssg + ", " + name + "!");
  };
}

const greetJohn = greet("John");
greetJohn("Hello"); // Output: Hello, John!

function createMultiplier(n) {
  return (v) => {
    return n * v;
  };
}

const double = createMultiplier(2);
console.log(double(5)); // Output: 10

// Advanced exercises
function memoize(fn) {
  let first = true;
  return (v) => {
    if (first) {
      return fn(v);
      first = false;
    } else {
      return v * v;
    }
  };
}

const slowSquare = (n) => {
  for (let i = 0; i < 1000000000; i++) {} // Simulate slow computation
  return n * n;
};

const fastSquare = memoize(slowSquare);
console.log(fastSquare(5)); // Slow on first call
console.log(fastSquare(5)); // Fast on second call

function createCounter() {
  let count = 0;
  const increment = () => {
    count++;
    return count;
  };

  const reset = () => {
    count = 0;
  };

  return {
    increment,
    reset,
  };
}

const counter2 = createCounter();
console.log(counter2.increment()); // Output: 1
console.log(counter2.increment()); // Output: 2
counter2.reset();
console.log(counter2.increment()); // Output: 1

function once(fn) {
  let first = true;
  return (mssge) => {
    if (first) {
      fn(mssge);
      first = false;
    }
  };
}

const logOnce = once((msg) => console.log(msg));
logOnce("Hello!"); // Output: Hello!
logOnce("Hello again!"); // No output

function curry(fn) {
  // Check if the number of arguments is sufficient
  return function curried(...args) {
    // If the number of arguments is enough, call the original function
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      // Otherwise, return a function that takes the next argument
      return function (...nextArgs) {
        // Recursively call curried with the combined arguments
        return curried.apply(this, args.concat(nextArgs));
      };
    }
  };
}

function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // Output: 6

function compose(...fns) {
  return (v) => {
    fns = fns.reverse();
    for (const f of fns) v = f(v);
    return v;
  };
}

const add1 = (x) => x + 1;
const double2 = (x) => x * 2;
const subtract3 = (x) => x - 3;

const composed = compose(subtract3, double2, add1);
console.log(composed(5)); // Output: 9
