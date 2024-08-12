type LazyAdd = (...args: number[]) => number;
type LazyEval = (args: number[]) => number[];

type LazyType = { func: LazyAdd, args: number[] } | { func: LazyEval, args: number[] };

class Lazy {
  steps: LazyType[];
  constructor() {
    this.steps = [];
  }

  add(func: LazyAdd, ...args: number[]) {
    this.steps = [...this.steps, { func, args }];
    return this;
  }

  evaluate(target: number[]) {
    return target.map(item => {
      return this.steps.reduce((acc: any, curr: any) => {
        const { func, args } = curr;
        return func(...args, acc)
      }, item)
    })
  }
}

export {
  Lazy
}