function isBalanced(string) {
  const opened = "({[<";bn
  const closed = ")}]>";

  const stack = [];

  for (let i = 0; i < string.length; i++) {
    if (opened.includes(string[i])) {
      stack.push(string[i]);
    } else if (closed.includes(string[i])) {
      const last = stack.pop()
      if (opened.indexOf(last) !== closed.indexOf(string[i])) return false;
    }
  }
  return !stack.length
}

console.log(isBalanced("(x + y) - (4)")); // -> true
console.log(isBalanced("(((10 ) ()) ((?)(:)))")); // -> true
console.log(isBalanced("[{()}]")); // -> true
console.log(isBalanced("(50)(")); // -> false
console.log(isBalanced("[{]}")); // -> false
console.log(isBalanced("()<>([])>")); // -> false


function isBalanced2(string) {
  let round = 0;
  let square = 0;
  let braces = 0;
  let roundIndex = 0;
  let squareIndex = 0;
  let bracesIndex = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == "(") {
      round++;
      roundIndex = i;
    } else if (string[i] == "[") {
      square++;
      squareIndex = i;
    } else if (string[i] == "{") {
      braces++;
      bracesIndex = i;
    } else if (string[i] == ")") {
      if (roundIndex < squareIndex || roundIndex < bracesIndex) return false;
      if (--round === 0) roundIndex = 0;
    } else if (string[i] == "]") {
      if (squareIndex < roundIndex || squareIndex < bracesIndex) return false;
      if (--square === 0) squareIndex = 0;
    } else if (string[i] == "}") {
      if (bracesIndex < squareIndex || bracesIndex < roundIndex) return false;
      if (--braces === 0) bracesIndex = 0;
    }
  }
  return roundIndex === 0 && squareIndex === 0 && bracesIndex === 0;
}
