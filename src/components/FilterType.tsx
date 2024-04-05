"use client";

import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

interface Props {
  type: ITypeAttributes[];
}

export function FilterType({ type }: Props) {
  const [open, setOpen] = useState(false);
  const searchParams = useSearchParams();
  const search = searchParams.get("type");
  const pathname = usePathname();
  const isActive = pathname.startsWith("/generation");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          disabled={!isActive}
          variant="outline"
          className="flex-1 justify-between w-ful"
        >
          {search ? search : "Selecione o tipo"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-60" align="center">
        <Command>
          <CommandInput placeholder="Pesquise pelo tipo..." />
          <CommandList>
            <CommandEmpty>Resultado não encontrado.</CommandEmpty>
            <CommandGroup>
              {type.map((t) => (
                <Link key={t.id + t.name} href={{ query: { type: t.name } }}>
                  <CommandItem
                    onSelect={() => {
                      setOpen(false);
                    }}
                  >
                    {t.name}
                    <Check
                      className={cn(
                        "ml-auto h-4 w-4",
                        search === t.name ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                </Link>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
