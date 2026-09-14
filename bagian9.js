const products = [
  {
    id: 201,
    title: "HP Pavilion",
    category: "laptops"
  },
  {
    id: 202,
    title: "Asus VivoBook",
    category: "laptops"
  },
  {
    id: 203,
    title: "Oppo A78",
    category: "phones"
  },
  {
    id: 204,
    title: "Realme C55",
    category: "phones"
  },
  {
    id: 205,
    title: "Canon Camera",
    category: "cameras"
  },
  {
    id: 206,
    title: "Nikon D3500",
    category: "cameras"
  },
  {
    id: 207,
    title: "Logitech Mouse",
    category: "accessories"
  }
];

function groupByCategory(products) {
  return products.reduce((groups, product) => {
    const category = product.category;

    if (!groups[category]) {
      groups[category] = [];
    }

    groups[category].push(product);

    return groups;
  }, {});
}

const groupedProducts = groupByCategory(products);

console.log("Produk berdasarkan kategori:");
console.log(groupedProducts);

console.log("Jumlah produk setiap kategori:");

for (const category in groupedProducts) {
  console.log(
    category + ": " + groupedProducts[category].length
  );
}