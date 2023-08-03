//dbf
const debouncing = function (fn, timeout = 1000) {
  let tm = undefined;
  return (...arg) => {
    if (tm) clearTimeout(tm);
    return new Promise((res, rej) => {
      tm = setTimeout(() => {
        res(fn(arg));
      }, timeout);
    });
  };
};

mf = function () {
  return 8888;
};

dmf = debouncing(mf);
let x, y, z;

x = dmf();
y = dmf();

setTimeout(() => {
  z = dmf();
  z.then((done) => {
    console.log("z", done);
  });
}, 1500);

x.then((done) => {
  console.log("x", done);
});
y.then((done) => {
  console.log("y", done);
});
