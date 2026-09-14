const state = {
  products: [
    {
      id: 1,
      title: "Acer Aspire",
      category: "Laptop",
      price: 7500000,
      rating: 4.5
    },
    {
      id: 2,
      title: "Lenovo IdeaPad",
      category: "Laptop",
      price: 6800000,
      rating: 4.3
    },
    {
      id: 3,
      title: "Samsung Galaxy",
      category: "Smartphone",
      price: 4500000,
      rating: 4.6
    },
    {
      id: 4,
      title: "Xiaomi Redmi",
      category: "Smartphone",
      price: 3200000,
      rating: 4.4
    },
    {
      id: 5,
      title: "JBL Speaker",
      category: "Audio",
      price: 1200000,
      rating: 4.7
    }
  ],
  search: "",
  category: "all",
  sortBy: "default",
  favorites: [],
  status: "idle"
};

function renderProducts(products) {
  const container = document.querySelector("#product-list");

  container.innerHTML = "";

  for (const product of products) {
    const card = document.createElement("div");

    card.classList.add("product-card");

    card.innerHTML = `
      <h3>${product.title}</h3>
      <p>Kategori: ${product.category}</p>
      <p>Harga: Rp${product.price}</p>
      <p>Rating: ${product.rating}</p>
    `;

    container.appendChild(card);
  }
}

function render() {
  let filteredProducts = state.products;

  if (state.search !== "") {
    filteredProducts = filteredProducts.filter(product =>
      product.title.toLowerCase().includes(state.search.toLowerCase())
    );
  }

  if (state.category !== "all") {
    filteredProducts = filteredProducts.filter(product =>
      product.category === state.category
    );
  }

  renderProducts(filteredProducts);
}

document.querySelector("#search").addEventListener("input", event => {
  state.search = event.target.value;
  render();
});

document.querySelector("#category").addEventListener("change", event => {
  state.category = event.target.value;
  render();
});

render();