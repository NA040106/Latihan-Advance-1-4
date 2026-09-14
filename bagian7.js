const products = [
  {
    id: 1,
    title: "Laptop",
    price: 1200
  },
  {
    id: 2,
    title: "MacBook",
    price: 1800
  },
  {
    id: 3,
    title: "Smartphone",
    price: 800
  },
  {
    id: 4,
    title: "iPhone",
    price: 1200
  },
  {
    id: 5,
    title: "Headphones",
    price: 100
  }
];

const sortedProducts = [...products].sort(
  (a, b) => a.price - b.price
);

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

const prices = sortedProducts.map(
  product => product.price
);

console.log("Produk setelah diurutkan:");
console.log(sortedProducts);

console.log("Hasil pencarian harga 1200:");
console.log(binarySearch(prices, 1200));

console.log("Hasil pencarian harga 500:");
console.log(binarySearch(prices, 500));

function binarySearchByPrice(sortedProducts, targetPrice) {
  let left = 0;
  let right = sortedProducts.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (sortedProducts[mid].price === targetPrice) {
      return sortedProducts[mid];
    }

    if (sortedProducts[mid].price < targetPrice) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return null;
}

console.log("Produk dengan harga 1200:");
console.log(binarySearchByPrice(sortedProducts, 1200));

console.log("Produk dengan harga 500:");
console.log(binarySearchByPrice(sortedProducts, 500));