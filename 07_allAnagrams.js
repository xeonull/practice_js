function allAnagrams(array) {
  const sorted = array.map((str) => str.split("").sort().join(""));
  //const sorted = array.map(str => Array.from(str).sort().join(''))

  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i - 1] !== sorted[i]) return false;
  }
  return true;
}

console.log(allAnagrams(["abcd", "bdac", "cabd"])); // true
console.log(allAnagrams(["abcd", "bdXc", "cabd"])); // false
console.log(allAnagrams(["abcd", "abcd", "abcdd"])); // false
