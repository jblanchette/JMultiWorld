function inherits(child, parent) {
  child.super_ = parent;

  child.prototype = Object.create(parent.prototype, {
    constructor: {
      value: child,
      configurable: true,
      enumerable: false,
      writable: true
    }
  });
};