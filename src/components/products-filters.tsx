import { Search } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "react-router-dom";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { z } from "zod";

const productsFiltersSchema = z.object({
  id: z.string().min(1, { message: "Informe o id do produto." }),
  name: z.string().min(1, { message: "Informe o nome do produto." }),
});

type ProductsFiltersSchema = z.infer<typeof productsFiltersSchema>;

export function ProductsFilters() {
  const [_, setSearchParams] = useSearchParams();

  const { register, handleSubmit, formState } = useForm<ProductsFiltersSchema>({
    resolver: zodResolver(productsFiltersSchema),
  });

  function handleFilterProducts({ id, name }: ProductsFiltersSchema) {
    setSearchParams((state) => {
      if (id) {
        state.set("id", id);
      } else {
        state.delete("id");
      }

      return state;
    });

    setSearchParams((state) => {
      if (name) {
        state.set("name", name);
      } else {
        state.delete("name");
      }

      return state;
    });
  }

  return (
    <form
      onSubmit={handleSubmit(handleFilterProducts)}
      className="flex items-center gap-2"
    >
      <div className="flex flex-col">
        <Input {...register("id")} placeholder="ID do produto" />
        {formState.errors.id && (
          <span className="text-sm text-red-500 mt-1">
            {formState.errors.id.message}
          </span>
        )}
      </div>

      <div className="flex flex-col">
        <Input {...register("name")} placeholder="Nome do produto" />
        {formState.errors.name && (
          <span className="text-sm text-red-500 mt-1">
            {formState.errors.name.message}
          </span>
        )}
      </div>

      <Button type="submit" variant="link">
        <Search className="size-4 mr-2" />
        Filtrar resultados
      </Button>
    </form>
  );
}
