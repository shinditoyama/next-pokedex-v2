import { fetchGeneration } from "@/app/actions";
import { Menu } from "lucide-react";
import { FilterGeneration } from "./FilterGeneration";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export async function MobileNav() {
  const { generation } = await fetchGeneration();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <ScrollArea className="h-full">
          <div className="py-4 pr-4 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tight">Generation</h2>
              <FilterGeneration generation={generation} />
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
