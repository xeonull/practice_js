/*
    ❯ Стратегия / Strategy
*/

// Пример аутентификации пользователей
// При появлении нового типа аутенификации приходится изменять функцию login
function login_incorrent(mode) {
  if (mode === "account") {
    loginWithPassword();
  } else if (mode === "email") {
    loginWithEmail();
  } else if (mode === "mobile") {
    loginWithMobile();
  } else if (mode === "google") {
    loginWithGoogle();
  }
}
function loginWithPassword() {}
function loginWithEmail() {}
function loginWithMobile() {}
function loginWithGoogle() {}

// Применяя патерн 'Стратегия' при добавлении нового типа аутентификации не приходится менять уже существующие функции/классы

// Интерфейс Strategy
interface Strategy {
  authenticate(args: any[]): boolean;
}

// Класс TwitterStrategy
class TwitterStrategy implements Strategy {
  authenticate(args: any[]) {
    const [token] = args;
    if (token !== "tw123") {
      console.error("Аутентификация с помощью аккаунта Twitter провалилась!");
      return false;
    }
    console.log("Аутентификация с помощью аккаунта Twitter выполнена успешно!");
    return true;
  }
}

// Класс LocalStrategy
class LocalStrategy implements Strategy {
  authenticate(args: any[]) {
    const [username, password] = args;
    if (username !== "bytefer" && password !== "666") {
      console.log("Неправильное имя пользователя или пароль!");
      return false;
    }
    console.log("Аутентификация с помощью логина и пароля выполнена успешно!");
    return true;
  }
}

// Определим класс для переключения между стратегиями и выполнения соответствующих операций:
// Класс Authenticator
class Authenticator {
  strategies: Record<string, Strategy> = {};

  use(name: string, strategy: Strategy) {
    this.strategies[name] = strategy;
  }

  authenticate(name: string, ...args: any) {
    if (!this.strategies[name]) {
      console.error("Политика аутентификации не установлена!");
      return false;
    }

    return this.strategies[name].authenticate.apply(null, args);
  }
}

// Пример того, как это работает в основной программе:
const auth = new Authenticator();

auth.use("twitter", new TwitterStrategy());

auth.use("local", new LocalStrategy());

function login(mode: string, ...args: any) {
  return auth.authenticate(mode, args);
}

login("twitter", "123");

login("local", "bytefer", "666");
