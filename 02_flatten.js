function flatten(array) {
  return Array.isArray(array) ? array.flat(Infinity) : new Array(array);
}

function flatten2(array) {
  const res = [];

  if (!Array.isArray(array)) res.push(array);
  else {
    (function addFlatten(a) {
      for (let i = 0; i < a.length; i++) {
        if (Array.isArray(a[i])) addFlatten(a[i]);
        else res.push(a[i]);
      }
    })(array);

    return res;
  }
}

console.log(flatten([[1], 2]));
console.log(flatten([[1], [[2, 3]], [[[4, [5, 6]]]]]));
console.log(flatten("abc"));

console.log(flatten2([[1], 2]));
console.log(flatten2([[1], [[2, 3]], [[[4, [5, 6]]]]]));
console.log(flatten2("abc"));
