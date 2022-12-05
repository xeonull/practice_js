/* TS type определение: */
type Point = {
  x: number;
  y: number;
};
type SetPoint = (x: number, y: number) => void;

/* TS interface определение: */
interface IPoint {
  x: number;
  y: number;
}
interface SetIPoint {
  (x: number, y: number): void;
}

/* TS type может использоваться не только для объектных типов, но и для примитивов, объединений и картежей в отличие от TS interface */
type Name = string; // primitive
type PartialPointX = { x: number }; // object
type PartialPointY = { y: number }; // object
type PartialPoint = PartialPointX | PartialPointY; // union
type Data = [number, string]; // tuple

/* TS type не может иметь несколько обьявлений в отличие от TS interface */
interface NewPoint {
  x: number;
}
interface NewPoint {
  y: number;
}

/* TS type и TS interface могут расширятся, но отличается синатсис */
interface IPartialPointX {
  x: number;
}
interface IPoint extends IPartialPointX {
  y: number;
}

type TPartialPointX = { x: number };
type TPoint = TPartialPointX & { y: number };

/* Класс может реализовывать как TS type так и TS interface
   Однако, если TS type является объединением, его нельзя релизовать или наследовать */
type XPoint = { x: number }; // | { y: number; };

class SomePartialPoint implements XPoint {
  x = 1;
  y = 2;
}

interface XYZPoint extends XPoint {
  z: number;
}

/* ! - оператора утверждения ненулевого значения */
let value: string | undefined;
// код, инициализирующий переменную `value` (присваивающий ей какое-либо значение)
// утверждаем, что `value` имеет значение (определена)
console.log(`Значение переменной 'value' состоит из ${value!.length} символов`);

/* тип unknown - значение неизвестного на момент определения типа */
/* в отличие от any тип unknown не даст выполнить действия без необходимой проверки на тип */
let someVal: unknown;
(someVal as number[]).length = 3;
if (typeof someVal === "function") someVal();
