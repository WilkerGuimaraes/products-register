import { Loader2, PlusCircle, Trash2 } from "lucide-react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

import { Button } from "../components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { Dialog, DialogTrigger } from "../components/ui/dialog";
import { ProductsFilters } from "../components/products-filters";
import { CreateProductDialog } from "../components/create-product-dialog";
import { Pagination } from "../components/pagination";

import { Product, ProductsResponse } from "../data/products";
import { queryClient } from "@/lib/react-query";

export function Products() {
  const [searchParams] = useSearchParams();

  const [count, setCount] = useState(0);

  const pages = Math.ceil(count / 20);

  const id = searchParams.get("id") ?? "";
  const name = searchParams.get("name") ?? "";
  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;

  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["products", page, id, name],
    queryFn: async () => {
      const params = new URLSearchParams();

      if (id) params.set("id", id);
      if (name) params.set("name", name);
      params.set("page", String(page));

      const queryString = params.toString();

      const response = await axios.get<ProductsResponse>(
        `http://localhost:3333/products?${queryString}`
      );

      const countResponse = response.data.count;
      setCount(countResponse);

      return response.data.products;
    },
  });

  const { mutateAsync: deleteProduct } = useMutation({
    mutationFn: async (id: string) => {
      await axios.delete(`http://localhost:3333/products/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
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
            {products?.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>
                  {product.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </TableCell>

                <TableCell>
                  <div className="flex justify-end">
                    <button onClick={() => deleteProduct(product.id)}>
                      <Trash2 className="size-4 text-red-500" />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {products && (
        <Pagination
          products={products}
          page={page}
          items={count}
          pages={pages}
        />
      )}
    </div>
  );
}
