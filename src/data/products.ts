export async function getProducts() {
  // delay de 1s
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return [
    { id: "4dsd8bh2", name: "Product 1", price: 56.78 },
    { id: "8bh2kq3a", name: "Product 2", price: 33.45 },
    { id: "c9g3hkf5", name: "Product 3", price: 40.21 },
    { id: "5z8nhd7s", name: "Product 4", price: 75.32 },
    { id: "2z9h3j1a", name: "Product 5", price: 27.89 },
    { id: "6b8n2f4d", name: "Product 6", price: 68.95 },
    { id: "9z8n2s0q", name: "Product 7", price: 22.37 },
    { id: "1h2j9d3k", name: "Product 8", price: 63.14 },
    { id: "7b3m5q8z", name: "Product 9", price: 44.78 },
    { id: "3s8f2b9a", name: "Product 10", price: 59.62 },
    { id: "4d8j2h7q", name: "Product 11", price: 49.01 },
    { id: "2h9q8f3d", name: "Product 12", price: 29.55 },
    { id: "5d8f2h4k", name: "Product 13", price: 31.79 },
    { id: "8n2k4s3d", name: "Product 14", price: 71.26 },
    { id: "9s8f2j4d", name: "Product 15", price: 64.09 },
    { id: "7b2h8k5q", name: "Product 16", price: 48.77 },
    { id: "3d8s2j9h", name: "Product 17", price: 73.81 },
    { id: "5b2h8k4s", name: "Product 18", price: 38.96 },
    { id: "8n2h4j5d", name: "Product 19", price: 20.67 },
    { id: "1b9s8f2j", name: "Product 20", price: 77.04 },
  ];
}

interface CreateProductRequest {
  name: string;
  price: number;
}

export async function createProduct(_: CreateProductRequest) {
  // delay de 1s
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return;
}
