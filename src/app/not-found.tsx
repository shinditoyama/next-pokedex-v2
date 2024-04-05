import { buttonVariants } from "@/components/ui/button";
import { Frown } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex h-full w-full flex-col items-center justify-center gap-2">
      <Frown size={40} />
      <h2 className="text-4xl font-bold">
        <span className="sr-only">Error</span>404
      </h2>
      <p className="text-lg">Desculpe, página não encontrada.</p>
      <Link href="/" className={buttonVariants({ variant: "link" })}>
        Go Back
      </Link>
    </section>
  );
}
