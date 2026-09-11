const products = [
  {
    id: 1,
    title: "Laptop",
    price: 1200,
    category: "laptops"
  },
  {
    id: 2,
    title: "MacBook",
    price: 1800,
    category: "laptops"
  },
  {
    id: 3,
    title: "Smartphone",
    price: 800,
    category: "phones"
  },
  {
    id: 4,
    title: "iPhone",
    price: 1200,
    category: "phones"
  },
  {
    id: 5,
    title: "Headphones",
    price: 100,
    category: "audio"
  }
];

function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }

  return -1;
}

const numbers = [10, 20, 30, 40, 50];

console.log(linearSearch(numbers, 30));
console.log(linearSearch(numbers, 100));

function findProductById(products, id) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      return products[i];
    }
  }

  return null;
}

console.log(findProductById(products, 3));
console.log(findProductById(products, 10));