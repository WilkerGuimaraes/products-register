import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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
  name: z.string(),
  price: z.coerce.number(),
});

type CreateProductShema = z.infer<typeof createProductSchema>;

export function CreateProductDialog() {
  const { register, handleSubmit } = useForm<CreateProductShema>({
    resolver: zodResolver(createProductSchema),
  });

  function handleCreateProduct(data: CreateProductShema) {
    console.log(data);
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
        </div>

        <div className="grid grid-cols-4 items-center text-right gap-3">
          <Label htmlFor="price">Preço:</Label>
          <Input className="col-span-3" id="price" {...register("price")} />
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
