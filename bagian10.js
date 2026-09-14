const products = [
  {
    id: 201,
    title: "HP Pavilion",
    category: "laptops",
    brand: "HP",
    rating: 4.5,
    tags: ["computer", "office"]
  },
  {
    id: 202,
    title: "Asus VivoBook",
    category: "laptops",
    brand: "Asus",
    rating: 4.2,
    tags: ["computer", "student"]
  },
  {
    id: 203,
    title: "Oppo A78",
    category: "phones",
    brand: "Oppo",
    rating: 4.4,
    tags: ["smartphone", "android"]
  },
  {
    id: 204,
    title: "Realme C55",
    category: "phones",
    brand: "Realme",
    rating: 4.1,
    tags: ["smartphone", "android"]
  },
  {
    id: 205,
    title: "Acer Nitro",
    category: "laptops",
    brand: "Acer",
    rating: 4.6,
    tags: ["gaming", "computer"]
  }
];

function countFrequency(array) {
  return array.reduce((counts, item) => {
    counts[item] = (counts[item] || 0) + 1;
    return counts;
  }, {});
}

const categories = products.map(product => product.category);

const brands = products.map(product => product.brand);

const ratings = products.map(
  product => Math.round(product.rating)
);

const tags = products.flatMap(product => product.tags);

console.log("Frekuensi kategori:");
console.log(countFrequency(categories));

console.log("Frekuensi brand:");
console.log(countFrequency(brands));

console.log("Frekuensi rating:");
console.log(countFrequency(ratings));

console.log("Frekuensi tags:");
console.log(countFrequency(tags));