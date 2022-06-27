function fibonacci(n) {
  const seq = [];
  if (n > 0) {
    seq.push(0);
    if (n > 1) {
      seq.push(1);
      for (let i = 3; i <= n; i++) {
        seq.push(seq[seq.length - 2] + seq[seq.length - 1]);
      }
    }
  }
  return seq;
}

const fibonacciMemo = (function () {
  const seq = [];

  return function (n) {
    if (n <= seq.length) {
      console.log('all cached')
      return seq.slice(0, n);
    }
    if (n > 0 && seq.length === 0) {
      seq.push(0);
    }
    if (n > 1 && seq.length === 1) {
      seq.push(1);
    }
    for (let i = seq.length+1; i <= n; i++) {
      console.log('pushed:', seq[seq.length - 2] + seq[seq.length - 1])
      seq.push(seq[seq.length - 2] + seq[seq.length - 1]);
    }

    return seq;
  };
})();

//console.log(fibonacci(9)); // -> [1, 1, 2, 3, 5, 8, 13, 21]

console.log(fibonacciMemo(9));
console.log(fibonacciMemo(7));
console.log(fibonacciMemo(11));
