// as Hashed table:
class Queue {
  #queue = {};
  #first = 0;
  #last = 0;

  constructor() {}

  enqueue(value) {
    this.#queue[this.#last] = value;
    this.#last++;
  }

  dequeue() {
    if (this.size === 0) return;
    delete this.#queue[this.#first];
    this.#first++;
  }

  get size() {
    return this.#last - this.#first;
  }

  print() {
    Object.entries(this.#queue).forEach((e) => console.log(`\t${e[0]}: ${e[1]}`));
  }
}

const q = new Queue();

console.log(q.size);
q.enqueue(500);
q.enqueue("abcn");
q.enqueue({a:'false'});
q.enqueue(false);
console.log(q.size);
q.print();
q.dequeue();
console.log(q.size);
q.print();
