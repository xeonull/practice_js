function debounce(callback, tm) {
  let debounce_timer;
  return (...args) => {
    if (debounce_timer) clearTimeout(debounce_timer);
    debounce_timer = setTimeout(() => {
      callback(args);
    }, tm);
  };
}

let logger = (logger_args) => {
  console.log(`Args: ${logger_args}`);
};

debounceLogger = debounce(logger, 2000);

debounceLogger("first");
debounceLogger("second");
debounceLogger("third");
setTimeout(() => {
  debounceLogger("fourth");
  setTimeout(() => {
    debounceLogger("fifth","sixth","seventh");
  }, 2100);
}, 2100);
