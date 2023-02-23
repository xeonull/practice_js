function throttle(callback, tm) {
  let throttle_timer;
  return (...args) => {
    if (!throttle_timer) {
      throttle_timer = setTimeout(() => {
        throttle_timer = null;
      }, tm);
      callback(args);
    }
  };
}

let logger = (logger_args) => {
  console.log(`Args: ${logger_args}`);
};

let throttleLogger = throttle(logger, 2000);

throttleLogger("first", 100);
throttleLogger("second");
setTimeout(() => throttleLogger("third"), 1500);
setTimeout(() => throttleLogger("fourth"), 2500);
