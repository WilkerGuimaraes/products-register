import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Label } from "@radix-ui/react-label";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const createProductSchema = z.object({
  name: z.string().min(1, { message: "O nome é obrigatório." }),
  price: z.coerce.number().min(1, { message: "O preço é obrigatório." }),
});

type CreateProductShema = z.infer<typeof createProductSchema>;

export function CreateProductDialog() {
  const queryClient = useQueryClient();

  const { register, handleSubmit, formState } = useForm<CreateProductShema>({
    resolver: zodResolver(createProductSchema),
  });

  const { mutateAsync: createProductFn } = useMutation({
    mutationFn: async ({ name, price }: CreateProductShema) => {
      // delay 1.5s
      await new Promise((resolve) => setTimeout(resolve, 1500));

      await fetch("http://localhost:3333/products", {
        method: "POST",
        body: JSON.stringify({ name, price }),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },
  });

  async function handleCreateProduct(data: CreateProductShema) {
    try {
      await createProductFn({
        name: data.name,
        price: data.price,
      });
      alert("Produto cadastrado com sucesso.");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Novo produto</DialogTitle>
        <DialogDescription>Criar um novo produto no sistema</DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit(handleCreateProduct)} className="space-y-6">
        <div className="grid grid-cols-4 items-center text-right gap-3">
          <Label htmlFor="name">Produto:</Label>
          <Input className="col-span-3" id="name" {...register("name")} />

          {formState.errors.name && (
            <span className="text-sm text-red-500 col-span-3">
              {formState.errors.name.message}
            </span>
          )}
        </div>

        <div className="grid grid-cols-4 items-center text-right gap-3">
          <Label htmlFor="price">Preço:</Label>
          <Input className="col-span-3" id="price" {...register("price")} />

          {formState.errors.price && (
            <span className="text-sm text-red-500 col-span-3">
              {formState.errors.price.message}
            </span>
          )}
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant={"outline"}>
              Cancelar
            </Button>
          </DialogClose>
          <Button type="submit">Salvar</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
}
