let log = (t) => {
  console.log(t);
};
Promise.resolve().then(() => console.log("promise l resolved"));

Promise.resolve().then(() => {
  console.log("promise 2 resolved");
  process.nextTick(() => console.log("next tick inside promise 2 resolve"));
});

Promise.resolve().then(() => {
  console.log("promise 3 resolved");
  Promise.resolve().then(() => console.log("promise inside promise 3 resolve"));
});

Promise.resolve().then(() => console.log("promise 4 resolved"));
Promise.resolve().then(() => console.log("promise 5 resolved"));
setImmediate(() => console.log("set immediate l"));
setImmediate(() => console.log("set immediate 2"));

process.nextTick(() => {
  console.log("next tick l");
  process.nextTick(() => console.log("next tick inside next tick l"));
});
process.nextTick(() => {
  console.log("next tick 2");
  Promise.resolve().then(() => console.log("promise inside next tick 2"));
});
process.nextTick(() => console.log("next tick 3"));

setTimeout(() => {
  console.log("set timeout");
  setTimeout(() => console.log("set timeout inside set timeout "), 0);
  setImmediate(() => console.log("set immediate inside set timeout "));
  // for (let index = 0; index < 1000; index++) {
  //   setImmediate(() => console.log("set immediate " + index.toString() + " inside set timeout "));
  // }
  process.nextTick(() => console.log("next tick !!!"))
  Promise.resolve().then(() => console.log("promise !!!"));
}, 0);

setImmediate(() => console.log("set immediate 3"));
setImmediate(() => console.log("set immediate 4"));

log("log 1");

setTimeout(() => console.log("set timeout 2"), 0);

Promise.resolve().then(() => console.log("promise 6 resolved"));
