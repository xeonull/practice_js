function isStringReverse(source, test) {
  return Array.from(source).reverse().join("") === test;
}

function isStringRotated(source, test) {
  if (source.length !== test.length) {
    return false
  }
  
  for (let i = 0; i < source.length; i++) {
    const rotate = source.slice(i, source.length) + source.slice(0, i)
  
    if (rotate === test) {
      return true
    }
  }
  
  return false
}

function isStringRotated2(source, test) {
  return source.length === test.length && (source + source).includes(test)
}

console.log(isStringRotated2("javascript", "scriptjava")); // -> true
console.log(isStringRotated2("javascript", "iptjavascr")); // -> true
console.log(isStringRotated2("javascript", "java")); // -> false
console.log(isStringRotated2("zacv", "vcaz")); // -> false
