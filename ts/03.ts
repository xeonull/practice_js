/*         Вспомогательные типы         */

/* Partial */
type partial = Partial<{ x: number; y: number; z?: number }>; // === { x?: number; y?: number; z?: number }

/* Required */
type required = Required<{ x: number; y?: number; z?: number }>; // === { x: number; y: number; z: number }

/* Readonly */
type readonly = Readonly<{ x: number; y: number; z: number }>; // === { readonly x: number; readonly y: number; readonly z: number }

/* Pick */
type pick = Pick<{ x: number; y: number; z: number }, "x" | "y">; // === { x: number; y: number }

/* Omit */
type omit = Omit<{ x: number; y: number; z: number }, "x" | "y">; // === { z: number }

/* Record */
type record = Record<"x" | "y" | "z", number>; // === { x: number; y: number; z: number }

/* Exclude */
type excluded = Exclude<string | number, string>; // === number

/* Extract */
type extracted = Extract<string | number, string>; // === string

/* NonNullable */
type notNull = NonNullable<string | number | void | null | undefined>; // === string | number | (void & {})

/* ReturnType */
type returnType = ReturnType<() => string>; // === string

/* InstanceType */
class Renderer {}
type instance3 = InstanceType<typeof Renderer>; // === Renderer

/*         Предохранители         */

/* Предикаты типа */
declare function isType<T>(val: unknown): val is T; // возвращает `true`, если `val` имеет тип `T`

let val: unknown;

if (isType(val)) {
  // `val` имеет тип `T`
}

/* typeof */
declare let tvalue: string | number | boolean;
const isBoolean = typeof tvalue === "boolean";

if (typeof tvalue === "number") {
  // значением `value` является число
} else if (isBoolean) {
  // `value` имеет логическое значение
} else {
  // значением `value` является строка
}

/* instanceof */
declare let ivalue: Date | Error | SomePartialPoint;
const isSomePartialPoint = ivalue instanceof SomePartialPoint;

if (ivalue instanceof Date) {
  // значением `value` является экземпляр `Date`
} else if (isSomePartialPoint) {
  // значением `value` является экземпляр `SomePartialPoint`
} else {
  // значением `value` является экземпляр `Error`
}

/* in */
interface Dog {
  woof(): void;
}
interface Cat {
  meow(): void;
}

function speak(pet: Dog | Cat) {
  if ("woof" in pet) {
    pet.woof();
  } else {
    pet.meow();
  }
}

/*         Утверждения (присвоения)         */

/* Утверждение типа */
let myVar1 = someVal as string;
// or
let myVar2 = <string>someVal;

/* Константа (иммутабельное значение) */
let point1 = { x: 24, y: 42 } as const;
// or
let point2 = <const>{ x: 24, y: 42 };

/*         Декларации         */

/* Глобальные */
declare const foo: number;

declare function greet(greeting: string): void;

/* Пространства имен */
declare namespace myLib {
  function createGreeting(s: string): string;
  let numberOfGreetings: number;
}

declare namespace GreetingLib {
  interface LogOptions {
    verbose?: boolean;
  }
  interface AlertOptions {
    modal: boolean;
    title?: string;
    color?: string;
  }
}

// Шаблонные строковые типы 
type V = `v${string}` // множество всех строк, которые начинаются с v