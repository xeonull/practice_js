function arraySubset(source, subset) {
  if (source.length < subset.length) {
    return false
  }

  for (let i = 0; i < subset.length; i++) {
    const index = source.indexOf(subset[i])
    if (index === -1) {
      return false
    }
    delete source[index]
  }
  return true
}

function arraySubset2(source, subset) {
  const used = [];
  for (let i = 0; i < subset.length; i++) {
    let j = -1;
    do {
      j++;
      j = source.indexOf(subset[i], j);
      if (j === -1) return false;
    } while (used.includes(j));

    used.push(j);
  }
  return true;
}

console.log(arraySubset2([2, 1, 3], [1, 2, 3])); // -> true
console.log(arraySubset2([2, 1, 1, 3], [1, 2, 3])); // -> true
console.log(arraySubset2([1, 1, 1, 3], [1, 3, 3])); // -> false
console.log(arraySubset2([1, 2], [1, 2, 3])); // -> false
