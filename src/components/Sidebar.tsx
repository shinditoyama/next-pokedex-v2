import { fetchGeneration } from "@/app/actions";
import { FilterGeneration } from "./FilterGeneration";
import { ScrollArea } from "./ui/scroll-area";

export async function Sidebar() {
  const { generation } = await fetchGeneration();

  return (
    <aside className="sticky top-0 bottom-0 left-0 hidden lg:block border-r w-72 pt-16 h-screen">
      <ScrollArea className="h-full">
        <div className="p-4">
          <FilterGeneration generation={generation} />
        </div>
      </ScrollArea>
    </aside>
  );
}
