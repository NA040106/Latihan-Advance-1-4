//Bagian 2
const products = [
  { id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5 },
  { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15 },
  { id: 3, title: "Headphones", price: 100, category: "audio", stock: 3 },
  { id: 4, title: "Monitor", price: 300, category: "electronics", stock: 8 },
  { id: 5, title: "Keyboard", price: 50, category: "accessories", stock: 20 },
  { id: 6, title: "Mouse", price: 25, category: "accessories", stock: 30 },
  { id: 7, title: "Webcam", price: 60, category: "electronics", stock: 2 },
  { id: 8, title: "Tablet", price: 500, category: "tablets", stock: 7 },
  { id: 9, title: "Smartwatch", price: 250, category: "wearables", stock: 12 },
  { id: 10, title: "Printer", price: 150, category: "electronics", stock: 4 },
  { id: 11, title: "Router", price: 90, category: "networking", stock: 9 },
  { id: 12, title: "External SSD", price: 110, category: "storage", stock: 18 },
  { id: 13, title: "Power Bank", price: 40, category: "accessories", stock: 25 },
  { id: 14, title: "Bluetooth Speaker", price: 70, category: "audio", stock: 6 },
  { id: 15, title: "Gaming Chair", price: 220, category: "furniture", stock: 3 },
  { id: 16, title: "Desk Lamp", price: 30, category: "furniture", stock: 14 },
  { id: 17, title: "Graphic Card", price: 700, category: "components", stock: 2 },
  { id: 18, title: "RAM 16GB", price: 80, category: "components", stock: 22 },
  { id: 19, title: "CPU Cooler", price: 45, category: "components", stock: 11 },
  { id: 20, title: "Microphone", price: 130, category: "audio", stock: 5 },
  { id: 21, title: "USB Hub", price: 20, category: "accessories", stock: 40 },
  { id: 22, title: "HDMI Cable", price: 10, category: "accessories", stock: 50 },
  { id: 23, title: "VR Headset", price: 400, category: "wearables", stock: 4 },
  { id: 24, title: "Action Camera", price: 350, category: "electronics", stock: 6 },
  { id: 25, title: "Drone", price: 900, category: "electronics", stock: 1 },
  { id: 26, title: "Smart Bulb", price: 15, category: "smart-home", stock: 35 },
  { id: 27, title: "Security Camera", price: 180, category: "smart-home", stock: 8 },
  { id: 28, title: "Wireless Charger", price: 35, category: "accessories", stock: 17 },
  { id: 29, title: "Laptop Stand", price: 45, category: "accessories", stock: 9 },
  { id: 30, title: "Monitor Arm", price: 65, category: "furniture", stock: 13 }
];
 
//2.1
function findProductById(products, id) {
    return products.find(product => product.id === id);
}

// Contoh penggunaan
const product = findProductById(products, 20);

//2.2
const lowStockProducts = products.filter(product => product.stock < 10);

console.log(lowStockProducts);