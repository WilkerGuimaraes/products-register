import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { useSearchParams } from "react-router-dom";

import { Button } from "./ui/button";

interface PaginationProps {
  page: number;
  items: number;
  pages: number;
}

export function Pagination({ page, items, pages }: PaginationProps) {
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

  const lastPageItems = items % 10 || 10;

  return (
    <div className="flex items-center justify-between text-sm">
      <span>
        Exibindo {page === pages ? lastPageItems : 20} de {items} Produtos
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
