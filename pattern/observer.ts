/*
    ❯ Наблюдатель / Observer

    Данный паттерн также используется для перманентного мониторинга событий и реагирования на модификацию данных.
    В "Наблюдателе" существует две основные роли: Субъект/Subject и Наблюдатель/Observer.

    Паттерн "Наблюдатель" определяет отношение один ко многим (one-to-many), позволяя нескольким объектам-наблюдателям одновременно следить за наблюдаемым субъектом. 
    При изменении состояния наблюдаемого субъекта об этом уведомляются все объекты-наблюдатели, чтобы они, в свою очередь, могли обновить собственное состояние.
*/

// Интерфейс Observer
interface Observer {
  notify(article: Article): void;
}
type Article = {author,title,url}

// Интерфейс Subject
interface Subject {
  observers: Observer[];

  addObserver(observer: Observer): void;

  deleteObserver(observer: Observer): void;

  notifyObservers(article: Article): void;
}

// Класс ConcreteObserver
class ConcreteObserver implements Observer {
  constructor(private name: string) {}

  notify(article: Article) {
    console.log(`"Статья: ${article.title}" была отправлена  ${this.name}.`);
  }
}

// Класс ConcreteSubject
class ConcreteSubject implements Subject{
  public observers: Observer[] = [];

  public addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  public deleteObserver(observer: Observer): void {
    const n: number = this.observers.indexOf(observer);

    n != -1 && this.observers.splice(n, 1);
  }

  public notifyObservers(article: Article): void {
    this.observers.forEach((observer) => observer.notify(article));
  }
}

// Проверяем работоспособность методов наших классов:
const subject: Subject = new ConcreteSubject();

const chris1993 = new ConcreteObserver("Chris1993");

const bytefish = new ConcreteObserver("Bytefish");

subject.addObserver(chris1993);
subject.addObserver(bytefish);

subject.notifyObservers({
  author: "Bytefer",
  title: "Observer Pattern in TypeScript",
  url: "https://medium.com/***",
});

subject.deleteObserver(bytefish);

subject.notifyObservers({
  author: "Bytefer",
  title: "Adapter Pattern in TypeScript",
  url: "https://medium.com/***",
});