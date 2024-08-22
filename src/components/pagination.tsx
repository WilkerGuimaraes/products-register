import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { useSearchParams } from "react-router-dom";

import { Button } from "./ui/button";
import { Product } from "@/data/products";

interface PaginationProps {
  products: Product[];
  page: number;
  items: number;
  pages: number;
}

export function Pagination({ products, page, items, pages }: PaginationProps) {
  const [, setSearchParams] = useSearchParams();

  function firstPage() {
    setSearchParams((params) => {
      params.set("page", "1");

      return params;
    });
  }

  function previousPage() {
    if (page - 1 <= 0) {
      return;
    }

    setSearchParams((params) => {
      params.set("page", String(page - 1));

      return params;
    });
  }

  function nextPage() {
    if (page + 1 > pages) {
      return;
    }

    setSearchParams((params) => {
      params.set("page", String(page + 1));

      return params;
    });
  }

  function lastPage() {
    setSearchParams((params) => {
      params.set("page", String(pages));

      return params;
    });
  }

  return (
    <div className="flex flex-col items-center gap-4 flex-wrap text-sm md:flex-row justify-between">
      <span>
        Exibindo {products.length} de {items} Produtos
      </span>

      <span>
        Página {page} de {pages}
      </span>
      <div className="space-x-1.5">
        <Button size={"icon"} onClick={firstPage} disabled={page - 1 <= 0}>
          <ChevronsLeft className="size-4" />
        </Button>
        <Button size={"icon"} onClick={previousPage} disabled={page - 1 <= 0}>
          <ChevronLeft className="size-4" />
        </Button>
        <Button size={"icon"} onClick={nextPage} disabled={page + 1 > pages}>
          <ChevronRight className="size-4" />
        </Button>
        <Button size={"icon"} onClick={lastPage} disabled={page + 1 > pages}>
          <ChevronsRight className="size-4" />
        </Button>
      </div>
    </div>
  );
}
