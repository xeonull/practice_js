function isUnique(string){
    for (let i = 0; i < string.length; i++) {
        if (i != string.lastIndexOf(string[i])) return false
    }
    return true
}

function isUnique2(string){
    return string.split('').find((v,i) => string.lastIndexOf(v) != i ) === undefined
}

function isUnique3(string){
    return new Set(string).size === string.length
}

console.log(isUnique('aAbnfa32'))
console.log(isUnique('aAbnfчс32'))

console.log(isUnique2('aAbnfa32'))
console.log(isUnique2('aAbnfчс32'))

console.log(isUnique3('aAbnfa32'))
console.log(isUnique3('aAbnfчс32'))
