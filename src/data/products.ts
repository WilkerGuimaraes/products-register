export interface ProductsResponse {
  products: Product[];
  count: number;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  createdAt: Date;
}
