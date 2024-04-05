"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { Button } from "./ui/button";

interface Props {
  generation: IGenerationAttributes[];
}

export function FilterGeneration({ generation }: Props) {
  const params = useParams();
  const pathname = usePathname();
  const isActive = pathname.startsWith("/generation");

  return (
    <>
      {generation.map((g) => (
        <Button
          key={g.id}
          variant={Number(params.id) === g.id && isActive ? "default" : "ghost"}
          className="w-full justify-start font-normal"
          asChild
        >
          <Link href={`/generation/${g.id}`}>{g.name}</Link>
        </Button>
      ))}
    </>
  );
}
