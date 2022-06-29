/*  Dependency Inversion Principle
    Принцип инверсии зависимости

    - Модули верхних уровней не должны импортировать сущности (или зависеть от сущностей) из модулей нижних уровней. Оба типа модулей должны зависеть от абстракций.
    - Абстракции не должны зависеть от деталей. Детали должны зависеть от абстракций.
*/

interface INotify {
  notify(message: string): void;
}

class Logger implements INotify {
  notify(message: string): void {
    console.log(message);
  }
}

// Не используем напрямую ссылку на класс Logger,
// вместо этого зависим только от интрефейса
class Order {
  constructor(private notifier: INotify) {}
  create() {
    this.notifier.notify("Order created");
  }
}

// Данный принцип реализуется с помощью Dependency Injection - передаем зависимый объект в constructor:
const order = new Order(new Logger());
