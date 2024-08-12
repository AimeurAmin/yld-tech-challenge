type LazyAdd = (...args: number[]) => number;
type LazyEval = (args: number[]) => number[];
type LazyType = {
    func: LazyAdd;
    args: number[];
} | {
    func: LazyEval;
    args: number[];
};
declare class Lazy {
    steps: LazyType[];
    constructor();
    add(func: LazyAdd, ...args: number[]): this;
    evaluate(target: number[]): any[];
}

export { Lazy };
