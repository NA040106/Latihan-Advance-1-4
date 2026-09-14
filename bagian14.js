class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const requestQueue = new Queue();

requestQueue.enqueue("Request Produk");
requestQueue.enqueue("Request Kategori");
requestQueue.enqueue("Request Statistik");
requestQueue.enqueue("Request Pencarian");

console.log("Isi Queue:");
console.log(requestQueue.items);

console.log("Request pertama:");
console.log(requestQueue.peek());

console.log("Request yang diproses:");
console.log(requestQueue.dequeue());

console.log("Queue setelah proses:");
console.log(requestQueue.items);

console.log("Request berikutnya:");
console.log(requestQueue.peek());

console.log("Apakah Queue kosong?");
console.log(requestQueue.isEmpty());