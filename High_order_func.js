// Beginner exercises
function withDelay(callback, delay) {
  setTimeout(callback, delay);
}

withDelay(() => console.log("This is delayed"), 1000); // Output after 1 second: "This is delayed"

function filterArray(arr, callback) {
  return arr.filter(callback);
}

const numbers = [1, 2, 3, 4, 5];
const evens = filterArray(numbers, (x) => x % 2 === 0);
console.log(evens); // Output: [2, 4]

function timeFunction(fn) {
  const start = Date.now();
  fn();
  const end = Date.now();
  console.log(`Function took ${end - start}ms to execute.`);
}

timeFunction(() => {
  for (let i = 0; i < 1000000; i++) {} // Some computation
});

// Advanced exercises
function debounce(fn, delay) {
  let now = undefined;
  let end = undefined;

  return () => {
    if (now === undefined) now = new Date().getSeconds();
    if (end === undefined) end = new Date().getSeconds() + 0.5;

    return setTimeout(() => {
      if (now < end) {
        fn();
        now = undefined;
        end = undefined;
      }
    }, delay);
  };
}

const log = debounce(() => console.log("Debounced!"), 500);
log();
log();
log(); // Only one "Debounced!" should appear after 500ms

function throttle(fn, interval) {
  let appear;

  return () => {
    appear = false;
    const intervalFunc = setInterval(() => {
      if (appear) {
        clearInterval(intervalFunc);
        return;
      }
      fn();
      appear = true;
    }, interval);
  };
}

const log1 = throttle(() => console.log("Throttled!"), 500);
log1();
log1(); // Only one "Throttled!" should appear every 500ms

function customMap(arr, callback) {
  return arr.map((n) => callback(n));
}

const numbers1 = [1, 2, 3];
const doubled = customMap(numbers1, (x) => x * 2);
console.log(doubled); // Output: [2, 4, 6]

function compose(...fns) {
  const func = (v) =>
    fns.reduceRight((prev, curr) => {
      return curr(prev);
    }, v);

  return (v) => {
    return func(v);
  };
}

const add1 = (x) => x + 1;
const double = (x) => x * 2;

const composed = compose(add1, double);
console.log(composed(5)); // Output: 11 (double(5) => 10, add1(10) => 11)

function partial(fn, ...presetArgs) {
  return (...vals) => {
    if (presetArgs.length + vals.length > fn.length)
      return "Arguments size out of size";

    vals.push.apply(vals, presetArgs);
    return fn(...vals);
  };
}

const add = (a, b, c) => a + b + c;
const add5 = partial(add, 5);

console.log(add5(10, 15)); // Output: 30
