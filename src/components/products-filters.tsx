import { Search } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { z } from "zod";

const productsFiltersSchema = z.object({
  id: z.string(),
  name: z.string(),
});

type ProductsFiltersSchema = z.infer<typeof productsFiltersSchema>;

export function ProductsFilters() {
  const { register, handleSubmit } = useForm<ProductsFiltersSchema>({
    resolver: zodResolver(productsFiltersSchema),
  });

  function handleFilterProducts(data: ProductsFiltersSchema) {
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit(handleFilterProducts)}
      className="flex items-center gap-2"
    >
      <Input {...register("id")} placeholder="ID do produto" />
      <Input {...register("name")} placeholder="Nome do produto" />

      <Button type="button" variant="link">
        <Search className="size-4 mr-2" />
        Filtrar resultados
      </Button>
    </form>
  );
}
