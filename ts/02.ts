/*         Дженерики (общие типы)         */

/* Функция с типом параметров */
declare function f1<T>(items: T[], callback: (item: T) => T): T[];

/* Интерфейс с несколькими типами */
interface Pair<T1, T2> {
  first: T1;
  second: T2;
}

/* Ограниченный тип параметра */
type ConstrainedType = { length: number };
declare function f2<T extends ConstrainedType>(): T;

/* Дефолтный тип параметра */
// @ts-ignore
declare function f3<T = DefaultType>(): T;

/* Ограниченный и дефолтный тип параметра */
// @ts-ignore
declare function f4<T extends ConstrainedType = DefaultType>(): T;

/* Общий кортеж */
type Arr = readonly any[];

function concat<U extends Arr, V extends Arr>(x: U, y: V): [...U, ...V] {
  return [...x, ...y];
}

const strictResult = concat([1, 2] as const, ["3", "4"] as const);
// type -> [1, 2, '3', '4']

const relaxedResult = concat([1, 2], ["3", "4"]);
// type -> Array<string | number>

/*         Индексные, связанные (mapped) и условные типы         */

/* Типы индексов (keyof) */
type APoint = { x: number; y: number };
let pointProps: keyof APoint = "x";

declare function getProp<T, K extends keyof T>(val: T, propKey: K): T[K];

/* Связанные типы (mapped types) */
type Stringify<T> = { [P in keyof T]: string };

type MyPartial<T> = { [P in keyof T]?: T[P] };

/* Условные типы */
type Swapper = <T extends number | string>(val: T) => T extends number ? string : number;

// Пример 1:
interface User {
  id: string;
}
interface Message {
  id: number;
}
function getId<T extends { id: any }>(obj: T): T extends { id: string } ? string : number {
  return obj.id;
}
let id_of_type_string = getId({} as User);
let id_of_type_number = getId({ id: 322 } as Message);

// Пример 2:
// Тип Filter аналог Exclude
type Filter<T, U> = T extends U ? never : T;
let f: Filter<"a" | "b" | "c", "b">;

// Пример 3 (Infer):
// Тип FunctionResult аналог ReturnType
const fn = () => {
  return 5;
};
type FunctionResult<T extends (...args: any) => any,> = T extends (...args: any) => infer R ? R : any; // infer - Разпознает тип возвращаемого функцией значения
type fn_result_number = FunctionResult<typeof fn>;

/* Условные связанные типы */
interface User {
  handle: string;
  email: string;
  age: number;
}

type StringProps<T> = {
  [K in keyof T]: T[K] extends string ? K : never;
};

type UserStrings = StringProps<User>;
// 'handle' | 'email'
