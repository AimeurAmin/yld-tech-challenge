import { Lazy } from 'yld-lazy-amin'

const computation = new Lazy();

const x = computation
  // simple function
  .add((a: number) => a * 2)
  // a plus function that will be given 1 as its first argument
  .add((a: number, b: number) => a + b, 1)
  // returns [3, 5, 7]
  .evaluate([1, 2, 3]);

console.log(x);

const y = computation.add(Math.sqrt).evaluate([1])

console.log(y);

const z = computation.add((a, b) => a + b, 1).evaluate([1]);

console.log(z);
