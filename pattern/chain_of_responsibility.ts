/*
    ❯ Цепочка обязанностей / Chain of Responsibility

    Паттерн "Цепочка обязанностей" (далее также — "Цепочка") позволяет избежать тесной связи и взаимного влияния между отправителем и получателем запроса, 
    предоставляя нескольким объектам возможность последовательно обрабатывать запрос. В рассматриваемом паттерне многочисленные объекты ссылаются друг на друга, 
    формируя цепочку объектов. Запрос передаются по цепочке до тех пор, пока один из объектов не осуществит его окончательную обработку.
    Если звено в цепочке не может обработать текущий запрос и имеется следующее звено, запрос будет перенаправлен в это звено для дальнейшей обработки.

    Случаи использования паттерна "Цепочка обязанностей":
 -  когда необходимо отправить запрос одному из нескольких объектов без явного указания получателя;
 -  когда существует несколько объектов для обработки запроса, и выбор конкретного объекта 
    для окончательной обработки запроса можно произвести динамически во время выполнения кода.
*/

// Интерфейс Handler
interface Handler {
    use(h: Handler): Handler; // для регистрации обработчика (посредника);  
    get(url: string, callback: (data: any) => void): void; // для вызова обработчика.
  }

// Абстрактный класс AbstractHandler (инкапсулирует логику обработки запроса. Этот класс соединяет обработчики в цепочку последовательных ссылок)
abstract class AbstractHandler implements Handler {
  next!: Handler;

  use(h: Handler) {
    this.next = h;
    return this.next;
  }

  get(url: string, callback: (data: any) => void) {
    if (this.next) {
      return this.next.get(url, callback);
    }
  }
}

// Класс AuthMiddleware (посредник, используемый для обработки аутентификации пользователей)
class AuthMiddleware extends AbstractHandler {
  isAuthenticated: boolean;

  constructor(username: string, password: string) {
    super();

    this.isAuthenticated = false;

    if (username === "bytefer" && password === "666") {
      this.isAuthenticated = true;
    }
  }

  get(url: string, callback: (data: any) => void) {
    if (this.isAuthenticated) {
      return super.get(url, callback);
    } else {
      throw new Error("Не авторизован!");
    }
  }
}

// Класс LoggerMiddleware (посредник, используемый для вывода информации о запросе)
class LoggerMiddleware extends AbstractHandler {
  get(url: string, callback: (data: any) => void) {
    console.log(`Адрес запроса: ${url}.`);

    return super.get(url, callback);
  }
}

// Определяем класс Route для регистрации созданных посредников:
class Route extends AbstractHandler {
  urlDataMap: { [key: string]: any };

  constructor() {
    super();
    this.urlDataMap = {
      "/api/todos": [
        { title: "Изучение паттернов проектирования" },
      ],
      "/api/random": () => Math.random(),
    };
  }

 get(url: string, callback: (data: any) => void) {
  super.get(url, callback);

  if (this.urlDataMap.hasOwnProperty(url)) {
      const value = this.urlDataMap[url];
      const result = typeof value === "function" ? value() : value;
      callback(result);
    }
  }
}

// Пример регистрации посредников с помощью Route:
const route = new Route();

route.use(new AuthMiddleware("bytefer", "666"))
 .use(new LoggerMiddleware());

route.get("/api/todos", (data) => {
  console.log(JSON.stringify(data, null, 2));
});

route.get("/api/random", (data) => {
  console.log(data);
});