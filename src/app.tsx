import { PlusCircle } from "lucide-react";

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

export function App() {
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

          <TableBody>
            {Array.from({ length: 10 }).map((_, index) => (
              <TableRow key={index}>
                <TableCell>skja8914y</TableCell>
                <TableCell>Produto {index}</TableCell>
                <TableCell>R$ 192,00</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
