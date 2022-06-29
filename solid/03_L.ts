/*  Liskov Substitution Principle
    Принцип подстановки Барабары Лисков

    Функции, работающие с базовым типом должны также корректно работать с подтипами данного базового типа при этом не зная ничего о них
*/

abstract class Database {
  connect() {}
  read() {}
  write() {}
  // joinTables(){}
  // В соответствии с принципом LSP не корректно использовать данный метод в классе Database,
  // вместо этого нужно создать два подкласса SQLDatabase и NoSQLDatabase
}

abstract class SQLDatabase extends Database {
  joinTables() {}
}

abstract class NoSQLDatabase extends Database {
  createIndex() {}
}

//class MySQLDatabase extends Database {
class MySQLDatabase extends SQLDatabase {
  connect() {}
  read() {}
  write() {}
  joinTables() {}
}

//class MongoDatabase extends Database {
class MongoDatabase extends NoSQLDatabase {
  connect() {}
  read() {}
  write() {}
  // joinTables() {throw new Error("No tables in no-sql mongo db");}
  createIndex() {}
}

function startApp(db: Database): void {
  db.connect();
}

startApp(new MySQLDatabase())
startApp(new MongoDatabase())

function getJoinResult(db: SQLDatabase): void {
  db.joinTables();
}

getJoinResult(new MySQLDatabase())