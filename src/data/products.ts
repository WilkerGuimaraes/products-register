export interface ProductsResponse {
  first: number;
  prev: number | null;
  next: number;
  last: number;
  pages: number;
  items: number;
  data: Product[];
}

export interface Product {
  id: string;
  name: string;
  price: number;
}
