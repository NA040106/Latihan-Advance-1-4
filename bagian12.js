const products = [
  {
    id: 201,
    title: "HP Pavilion",
    price: 950
  },
  {
    id: 202,
    title: "Asus VivoBook",
    price: 1100
  },
  {
    id: 203,
    title: "Oppo A78",
    price: 350
  },
  {
    id: 204,
    title: "Realme C55",
    price: 300
  },
  {
    id: 205,
    title: "Acer Nitro",
    price: 1250
  }
];

function buildProductLookup(products) {
  const productMap = new Map();

  for (const product of products) {
    productMap.set(product.id, product);
  }

  return productMap;
}

const productLookup = buildProductLookup(products);

console.log("Product Map:");
console.log(productLookup);

console.log("Produk dengan ID 203:");
console.log(productLookup.get(203));

console.log("Produk dengan ID 205:");
console.log(productLookup.get(205));

console.log("Produk dengan ID 999:");
console.log(productLookup.get(999));