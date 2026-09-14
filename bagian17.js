const products = [
  {
    title: "Acer Aspire",
    category: "Laptop",
    price: 7500000,
    rating: 4.5,
    thumbnail: "https://dummyjson.com/image/200x150"
  },
  {
    title: "Lenovo IdeaPad",
    category: "Laptop",
    price: 6800000,
    rating: 4.3,
    thumbnail: "https://dummyjson.com/image/200x150"
  },
  {
    title: "Samsung Galaxy",
    category: "Smartphone",
    price: 4500000,
    rating: 4.6,
    thumbnail: "https://dummyjson.com/image/200x150"
  },
  {
    title: "Xiaomi Redmi",
    category: "Smartphone",
    price: 3200000,
    rating: 4.4,
    thumbnail: "https://dummyjson.com/image/200x150"
  },
  {
    title: "JBL Speaker",
    category: "Audio",
    price: 1200000,
    rating: 4.7,
    thumbnail: "https://dummyjson.com/image/200x150"
  }
];

function renderProducts(products) {
  const container = document.querySelector("#product-list");

  container.innerHTML = "";

  for (const product of products) {
    const card = document.createElement("div");

    card.classList.add("product-card");

    card.innerHTML = `
      <img src="${product.thumbnail}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p>${product.category}</p>
      <p>Harga: Rp${product.price}</p>
      <p>Rating: ${product.rating}</p>
    `;

    container.appendChild(card);
  }
}

renderProducts(products);