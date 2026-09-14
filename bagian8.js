const numbers = [50, 20, 40, 10, 30];

const ascending = [...numbers].sort((a, b) => a - b);
const descending = [...numbers].sort((a, b) => b - a);

console.log("Ascending:");
console.log(ascending);

console.log("Descending:");
console.log(descending);

function bubbleSort(numbers) {
  const arr = [...numbers];

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

console.log("Bubble Sort:");
console.log(bubbleSort(numbers));

const products = [
  {
    id: 1,
    title: "Laptop",
    price: 1200,
    rating: 4.5
  },
  {
    id: 2,
    title: "MacBook",
    price: 1800,
    rating: 4.8
  },
  {
    id: 3,
    title: "Smartphone",
    price: 800,
    rating: 4.2
  },
  {
    id: 4,
    title: "iPhone",
    price: 1200,
    rating: 4.7
  },
  {
    id: 5,
    title: "Headphones",
    price: 100,
    rating: 4.1
  }
];

function sortProducts(products, sortBy) {
  const result = [...products];

  if (sortBy === "price-asc") {
    return result.sort((a, b) => a.price - b.price);
  }

  if (sortBy === "price-desc") {
    return result.sort((a, b) => b.price - a.price);
  }

  if (sortBy === "rating") {
    return result.sort((a, b) => b.rating - a.rating);
  }

  if (sortBy === "title") {
    return result.sort((a, b) => a.title.localeCompare(b.title));
  }

  return result;
}

console.log("Harga Termurah:");
console.log(sortProducts(products, "price-asc"));

console.log("Harga Termahal:");
console.log(sortProducts(products, "price-desc"));

console.log("Rating Tertinggi:");
console.log(sortProducts(products, "rating"));

console.log("Urutan Judul:");
console.log(sortProducts(products, "title"));