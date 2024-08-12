// src/index.ts
var Lazy = class {
  constructor() {
    this.steps = [];
  }
  add(func, ...args) {
    this.steps = [...this.steps, { func, args }];
    return this;
  }
  evaluate(target) {
    return target.map((item) => {
      return this.steps.reduce((acc, curr) => {
        const { func, args } = curr;
        return func(...args, acc);
      }, item);
    });
  }
};
export {
  Lazy
};
