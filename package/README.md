# YLD Tech challenge

this package is a just a tech challenge

### Install command

`npm i yld-lazy-amin`

### Import

`import { Lazy } from 'yld-lazy-amin'`

### Usage

```
const computation = new Lazy();

computation
  // simple function
  .add((a) => a * 2)
  // a plus function that will be given 1 as its first argument
  .add((a, b) => a + b, 1)
  // returns [3, 5, 7]
  .evaluate([1, 2, 3]);
```