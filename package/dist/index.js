"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Lazy: () => Lazy
});
module.exports = __toCommonJS(src_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Lazy
});
