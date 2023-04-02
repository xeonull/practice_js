let n = 0;
function compute() {
  for (let index = 0; index < 1000; index++) {
    n++;
  }
  setImmediate(compute, 0);
}

compute();

setTimeout(() => console.log(`set timeout: ${n}`), 0);
