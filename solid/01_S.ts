/*  Single Responsibility Principle
    Принцип единой ответственности

    1 Сущность (класс, компонент, модуль) = 1 Задача

    Предполагается максимальная декомпозиция
*/

class User {
  id: number;
  username: string;
  password: string;
  
  constructor(username: string, password: string) {
    this.id = this.generateId();
    this.username = username;
    this.password = password;
  }

  private generateId() {
    return 1;
  }
}

// Вместо добавления новых методов (для сохранения в базу, логирования и отправки) в класс User создаем для каждой задачи отдельный класс:

class UserRepository {
  save(user: User) {
    // Сохранение пользователя в базу
  }
}

class UserLogger {
  log(user: User) {
    // Логирование действий пользователя
  }
}

class UserController {
  send(user: User) {
    // Отправляем данные ползователя
  }
}
