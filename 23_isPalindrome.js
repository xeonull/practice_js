function isPalindrome(str) {
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    i_char_code = str[i].toUpperCase().charCodeAt(0);
    if (isSkippedSymbol(i_char_code)) {
      i++;
      continue;
    }

    j_char_code = str[j].toUpperCase().charCodeAt(0);
    if (isSkippedSymbol(j_char_code)) {
      j--;
      continue;
    }

    if (i_char_code !== j_char_code) return false;
    i++;
    j--;
  }
  return true;
}

function isSkippedSymbol(charCode) {
  if (charCode < 48 || (charCode > 57 && charCode < 65) || charCode > 90) {
    return true;
  }
}

console.log(isPalindrome("sitonapanotis")); // -> true
console.log(isPalindrome("2amanaplanacanalpanama2")); // -> true
console.log(isPalindrome("Do geese see God?")); // -> true
console.log(isPalindrome("ni,1in")); // -> true
console.log(isPalindrome("ninen")); // -> false
