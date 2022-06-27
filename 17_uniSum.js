function sum(...args) {
  let n = args.reduce((a, v) => {
    a += v;
    return a;
  }, 0);

  const add = (...rest) => {
    if (!rest.length) return n;
    n += rest.reduce((a, v) => {
      a += v;
      return a;
    }, 0);
    return add;
  };

  return add;
}

console.log(sum(20, 22)()); // -> 42
console.log(sum(20)(22)()); // -> 42
console.log(sum(20)(100, 7)(50000, 90000000)(22)());
