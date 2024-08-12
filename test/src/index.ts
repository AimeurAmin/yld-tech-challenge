import { Lazy } from 'yld-lazy-amin'

// First example:
const computation1 = new Lazy();

const x = computation1
  // simple function
  .add((a: number) => a * 2)
  // a plus function that will be given 1 as its first argument
  .add((a: number, b: number) => a + b, 1)
  // returns [3, 5, 7]
  .evaluate([1, 2, 3]);

console.log(x);

// Second example:
const computation2 = new Lazy();

const y = computation2.add(Math.sqrt).evaluate([4])

console.log(y);

// Third example:
const computation3 = new Lazy();

const z = computation3.add((a, b) => a + b, 1).evaluate([1]);

console.log(z);
