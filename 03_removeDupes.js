function removeDupes(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (!res.includes(str[i])) res += str[i];
  }
  return res;
}

function removeDupes2(str) {
  return Array.from(new Set(str)).join('');
}

console.log(removeDupes2("abcd")); // -> 'abcd'
console.log(removeDupes2("aabbccdd")); // -> 'abcd'
console.log(removeDupes2("abcddbca")); // -> 'abcd'
console.log(removeDupes2("abababcdcdcd")); // -> 'abcd'
