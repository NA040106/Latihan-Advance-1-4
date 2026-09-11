const products = [
  {
    id: 1,
    title: "Laptop",
    price: 1200,
    category: "laptops",
    stock: 5,
    rating: 4.5
  },
  {
    id: 2,
    title: "MacBook",
    price: 1800,
    category: "laptops",
    stock: 8,
    rating: 4.8
  },
  {
    id: 3,
    title: "Smartphone",
    price: 800,
    category: "phones",
    stock: 15,
    rating: 4.2
  },
  {
    id: 4,
    title: "iPhone",
    price: 1200,
    category: "phones",
    stock: 10,
    rating: 4.7
  },
  {
    id: 5,
    title: "Headphones",
    price: 100,
    category: "audio",
    stock: 3,
    rating: 4.1
  }
];

const titles = products.map(product => product.title);

console.log("Daftar Produk:");
console.log(titles);

const expensiveProducts = products.filter(
  product => product.price > 500
);

console.log("Produk dengan harga lebih dari 500:");
console.log(expensiveProducts);

const totalStock = products.reduce(
  (sum, product) => sum + product.stock,
  0
);

console.log("Total Stock:");
console.log(totalStock);

const laptopPrices = products
  .filter(product => product.category === "laptops")
  .map(product => product.price);

const averageLaptopPrice =
  laptopPrices.reduce((sum, price) => sum + price, 0)
  / laptopPrices.length;

console.log("Rata-rata harga laptop:");
console.log(averageLaptopPrice);

function getStatistics(products) {
  const prices = products.map(product => product.price);
  const ratings = products.map(product => product.rating);

  const totalProducts = products.length;

  const averagePrice =
    prices.reduce((sum, price) => sum + price, 0)
    / prices.length;

  const highestPrice = Math.max(...prices);

  const lowestPrice = Math.min(...prices);

  const totalStock = products.reduce(
    (sum, product) => sum + product.stock,
    0
  );

  const averageRating =
    ratings.reduce((sum, rating) => sum + rating, 0)
    / ratings.length;

  return {
    totalProducts,
    averagePrice,
    highestPrice,
    lowestPrice,
    totalStock,
    averageRating
  };
}

const statistics = getStatistics(products);

console.log("Statistik Produk:");
console.log(statistics);