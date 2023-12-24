import { Skeleton } from "@nextui-org/react";

function ProductDetailSkeleton() {
  return (
    <>
      <div className="reative grid grid-cols-6 gap-5">
        <div className="bg-slate-200 h-96 col-span-2">
          <Skeleton className="h-full w-full rounded-lg" />
        </div>
        <div className="col-span-4 flex flex-col gap-5">
          <Skeleton className="h-4 w-3/5 rounded-lg" />
          <Skeleton className="h-4 w-3/5 rounded-lg" />
          <Skeleton className="h-4 w-3/5 rounded-lg" />
          <Skeleton className="h-4 w-3/5 rounded-lg" />
          <Skeleton className="h-4 w-3/5 rounded-lg" />
          <Skeleton className="h-4 w-3/5 rounded-lg" />
          <Skeleton className="h-24 w-3/5 rounded-lg" />
        </div>
      </div>
    </>
  );
}

export default ProductDetailSkeleton;
