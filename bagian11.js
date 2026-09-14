const products = [
  {
    id: 201,
    title: "HP Pavilion",
    category: "laptops",
    brand: "HP",
    tags: ["computer", "office"]
  },
  {
    id: 202,
    title: "Asus VivoBook",
    category: "laptops",
    brand: "Asus",
    tags: ["computer", "student"]
  },
  {
    id: 203,
    title: "Oppo A78",
    category: "phones",
    brand: "Oppo",
    tags: ["smartphone", "android"]
  },
  {
    id: 204,
    title: "Realme C55",
    category: "phones",
    brand: "Realme",
    tags: ["smartphone", "android"]
  },
  {
    id: 205,
    title: "Acer Nitro",
    category: "laptops",
    brand: "Acer",
    tags: ["gaming", "computer"]
  }
];

const uniqueCategories = [
  ...new Set(products.map(product => product.category))
];

const uniqueBrands = [
  ...new Set(products.map(product => product.brand))
];

const uniqueTags = [
  ...new Set(products.flatMap(product => product.tags))
];

console.log("Kategori unik:");
console.log(uniqueCategories);

console.log("Brand unik:");
console.log(uniqueBrands);

console.log("Tags unik:");
console.log(uniqueTags);