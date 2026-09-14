class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const searchHistory = new Stack();

searchHistory.push("laptop");
searchHistory.push("smartphone");
searchHistory.push("headphones");
searchHistory.push("camera");

console.log("Riwayat pencarian:");
console.log(searchHistory.items);

console.log("Pencarian terakhir:");
console.log(searchHistory.peek());

console.log("Undo pencarian:");
console.log(searchHistory.pop());

console.log("Riwayat setelah undo:");
console.log(searchHistory.items);

console.log("Pencarian terakhir:");
console.log(searchHistory.peek());

console.log("Apakah Stack kosong?");
console.log(searchHistory.isEmpty());