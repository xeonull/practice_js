// as Linked list:
class LinkedList {
  #lenght = 0;
  #head;
  #tail;

  constructor() {
    this.#head = null;
    this.#tail = null;
  }

  addToTail(value) {
    const node = { value, next: null };

    if (!this.#head) this.#head = node;

    if (this.#tail) this.#tail.next = node;
    this.#tail = node;
    this.#lenght++;
  }

  removeFromHead() {
    if (this.#lenght === 0) return;
    const value = this.#head.value;

    this.#head = this.#head.next;
    this.#lenght--;

    return value;
  }

  size() {
    return this.#lenght;
  }

  print() {
    let e = this.#head;
    let n = 0;
    while (e) {
      console.log(`\t${n}: ${e.value}`);
      e = e.next;
      n++;
    }
  }
}

class Queue extends LinkedList {
  constructor() {
    super();
    this.enqueue = this.addToTail;
    this.dequeue = this.removeFromHead;
  }

  get size() {
    return super.size();
  }

  print() {
    super.print();
  }
}

const q = new Queue();

q.print();
console.log(q.size);
q.enqueue(800);
q.enqueue("tst");
q.enqueue({ a: "false" });
q.enqueue(true);
console.log(q.size);
q.print();
q.dequeue();
console.log(q.size);
q.print();
