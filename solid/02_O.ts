/*  Open-Closed Principle
    Принцип открытости/закрытости

    Программные сущности должны быть открыты на расширение, но закрыты на модификацию
*/

// В данном случае было бы антипаттерном считать площадь фигур в функции getSumArea, 
// т.к. при добавлении новой фигуры пришлось бы модифицировать данную функцию

interface IFigure {
  getArea(): number;
}

class Square implements IFigure {
  size: number;
  constructor(size: number) {
    this.size = size;
  }
  getArea(): number {
    return this.size * this.size;
  }
}

class Rectangle implements IFigure {
  wight: number;
  height: number;
  constructor(wight: number, height: number) {
    this.wight = wight;
    this.height = height;
  }
  getArea(): number {
    return this.wight * this.height;
  }
}

class Circle implements IFigure {
  radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }
  getArea(): number {
    return this.radius * this.radius * Math.PI;
  }
}

function getSumArea(figures: Array<IFigure>): number {
  return figures.reduce((a, v) => {
    a += v.getArea();
    return a;
  }, 0);
}
