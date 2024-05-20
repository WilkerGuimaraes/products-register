import { Loader2, PlusCircle } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

import { Button } from "./components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table";
import { Dialog, DialogTrigger } from "./components/ui/dialog";
import { ProductsFilters } from "./components/products-filters";
import { CreateProductDialog } from "./components/create-product-dialog";

import { ProductsResponse } from "./data/products";
export function App() {
  const { data: products, isLoading } = useQuery<ProductsResponse>({
    queryKey: ["products"],
    queryFn: async () => {
      const data = await fetch(
        "http://localhost:3333/products?_page=1&_per_page=20"
      ).then((response) => response.json());

      // delay 1.5s
      await new Promise((resolve) => setTimeout(resolve, 1500));

      return data;
    },
  });

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4">
      <h1 className="text-4xl font-bold">Produtos</h1>
      <div className="flex items-center justify-between">
        <ProductsFilters />

        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="size-4 mr-2" />
              Novo produto
            </Button>
          </DialogTrigger>

          <CreateProductDialog />
        </Dialog>
      </div>

      <div className="border rounded-lg p-2">
        <Table>
          <TableHeader>
            <TableHead>ID</TableHead>
            <TableHead>Produto</TableHead>
            <TableHead>Preço</TableHead>
          </TableHeader>

          {isLoading && (
            <h1 className="inline-flex gap-2 font-bold text-2xl">
              <Loader2 className="size-8 animate-spin" />
              Carregando...
            </h1>
          )}

          <TableBody>
            {products?.data.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>
                  {product.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
