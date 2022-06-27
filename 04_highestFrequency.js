function highestFrequency(array) {
  let el;
  let cnt = 0;
  for (let i = 0; i < array.length; i++) {
    let pos = i;
    let cnt_c = 0;
    do {
      cnt_c++;
      pos = array.indexOf(array[i], ++pos);
    } while (pos > 0);
    if (cnt_c > cnt) {
      cnt = cnt_c;
      el = array[i];
    }
  }
  return el;
}

console.log(highestFrequency(["a", "b", "c", "c", "d", "e"])); // -> c
console.log(highestFrequency(["abc", "def", "abc", "def", "abc"])); // -> abc
console.log(highestFrequency(["abc", "def"])); // -> abc
console.log(highestFrequency(["abc", "abc", "def", "def", "def", "ghi", "ghi", "ghi", "ghi"])); // -> ghi
console.log(highestFrequency(["b", "a", "a", "b", "c", "c", "d", "e"])); // -> b
