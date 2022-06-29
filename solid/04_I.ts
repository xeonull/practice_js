/*  Interface Segregation Principle
    Принцип разделения интерфейса

    Программные сущности не должны зависеть от методов, которые они не используют
*/

// В соответствии с принципом будет не корректно указать все следующие методы в интерфейсе IAnimal
interface IAnimal_incorrect{
  eat(): void
  walk(): void
  fly(): void
}

// Лучше разделить его на несколько интерфейсов:
interface IAnimal{
  eat(): void
}
interface IWalked{
  walk(): void
}
interface IFlied{
  fly(): void
}

// И в классах наследовать только необходимые интерфейсы без лишних методов:
class Dog implements IAnimal, IWalked{
  eat(): void {}
  walk(): void {}
}

class Bird implements IAnimal, IFlied{
  eat(): void {}
  fly(): void {}
}

class Whale implements IAnimal{
  eat(): void {}
}