const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function rotate90(source) {
  const res = [];
  res.push([source[2][0], source[1][0], source[0][0]]);
  res.push([source[2][1], source[1][1], source[0][1]]);
  res.push([source[2][2], source[1][2], source[0][2]]);
  return res;
}

function rotate180(source) {
  return rotate90(rotate90(source))
}

function rotate270(source) {
  return rotate180(rotate90(source))
}

console.log(rotate90(matrix));
console.log(rotate180(matrix));
console.log(rotate270(matrix));
