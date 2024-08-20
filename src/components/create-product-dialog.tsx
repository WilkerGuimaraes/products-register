import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Toaster, toast } from "sonner";
import { Loader2 } from "lucide-react";
import axios from "axios";

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
      await axios.post("http://localhost:3333/products", {
        name,
        price,
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
      toast.success("Novo produto adicionado com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("Algo deu errado!");
    }
  }

  return (
    <div>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Novo produto</DialogTitle>
          <DialogDescription>
            Criar um novo produto no sistema
          </DialogDescription>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(handleCreateProduct)}
          className="space-y-6"
        >
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
              <Button
                type="button"
                variant={"outline"}
                disabled={formState.isSubmitting}
              >
                Cancelar
              </Button>
            </DialogClose>
            <Button type="submit" disabled={formState.isSubmitting}>
              {formState.isSubmitting ? (
                <Loader2 className="animate-spin" />
              ) : (
                "Salvar"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
      <Toaster richColors />
    </div>
  );
}
