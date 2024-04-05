import { fetchType } from "@/app/actions";
import Link from "next/link";
import { Suspense } from "react";
import { FilterType } from "./FilterType";
import { MobileNav } from "./MobileNav";
import { Searchbar } from "./Searchbar";

export async function Header() {
  const { type } = await fetchType();

  return (
    <header className="fixed py-3 flex items-center top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="lg:hidden">
              <MobileNav />
            </div>
            <Link href="/">
              <h1 className="text-2xl font-bold">Pokedex</h1>
            </Link>
          </div>
          <div className="flex flex-nowrap items-center w-full order-last md:order-none mt-2 md:mt-0 md:w-2/4 lg:w-2/4 gap-3">
            <Suspense fallback={<div>Loading...</div>}>
              <FilterType type={type} />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
              <Searchbar />
            </Suspense>
          </div>
        </div>
      </div>
    </header>
  );
}
