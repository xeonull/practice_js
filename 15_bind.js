// 1. Реализация Bind через call
Function.prototype.myBind = function (context, ...arg) {
  return (...rest) => {
    return this.call(context, ...arg.concat(rest))
  }
}

// 2. Реализация Bind без нативных bind/call/apply
Function.prototype.myBind = function (context, ...arg) {
  return (...rest) => {
    const uniqueField = Symbol('bounded function')
    context[uniqueField] = this
    const res = context[uniqueField](...arg.concat(rest))
    delete context[uniqueField]
    return res
  }
}

// 3. Реализация Call
Function.prototype.myCall = function (context, ...arg) {
  const uniqueField = Symbol('called function')
  context[uniqueField] = this
  const res = context[uniqueField](...arg)
  delete context[uniqueField]
  return res
}

// 4. Реализация Apply
Function.prototype.myApply = function (context, arg) {
  const uniqueField = Symbol('applied function')
  context[uniqueField] = this
  const res = context[uniqueField](...arg)
  delete context[uniqueField]
  return res
}

const printer = {
  name: 'Max',
  printName(x, y, z) {
    console.log('hello', x, y, z, this.name)
  },
}

const mtd = printer.printName.myBind(printer, 'mr', 'great', 'super')
mtd()

newField = Symbol()
printer[newField] = 'stable'

printer.printName.myBind(printer, 'mr')('great', 'super')

printer.printName.myCall(printer, 'c_mr', 'c_great', 'c_super')

printer.printName.myApply(printer, ['a_mr', 'a_great', 'a_super'])
console.log(printer)

// function info(){
//   console.log(this)
// }

// info()
