import { Skeleton } from "@/components/Skeleton";

export default function Loading() {
  return (
    <div className="container py-4 pt-32 md:pt-20">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(198px,1fr))] gap-3">
        {Array.from({ length: 15 }).map((_, index) => (
          <Skeleton key={index} />
        ))}
      </div>
    </div>
  );
}
