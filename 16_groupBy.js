function groupBy(array, fn) {
  const res = {}
  for (let i = 0; i < array.length; i++) {
    const field = typeof fn === 'function' ? fn(array[i]) : array[i][fn]
    if (!res[field]) res[field] = []
    res[field].push(array[i])
  }
  return res
}

function groupBy2(array, fn) {
  return array.reduce((res, el) => {
    const field = typeof fn === 'function' ? fn(el) : el[fn]
    if (!res[field]) res[field] = []
    res[field].push(el)
    return res
  }, {})
}

console.log(groupBy([6.1, 4.2, 6.3], Math.floor)) // -> { '4': [4.2], '6': [6.1, 6.3] }
console.log(groupBy(['one', 'two', 'three'], 'length')) // -> { '3': ['one', 'two'], '5': ['three'] }
