import { Skeleton } from "@nextui-org/react";

function ProductDetailSkeleton() {
  return (
    <>
      <div className="reative grid grid-cols-6 gap-5">
        <div className=" col-span-2">
          <div className="bg-slate-200 h-80">
            <Skeleton className="h-full w-full rounded-lg" />
          </div>
          <Skeleton className="h-16 w-full rounded-lg mt-3" />
        </div>
        <div className="col-span-4 flex flex-col gap-2">
          <Skeleton className="h-6 w-3/5 rounded-lg" />
          <Skeleton className="h-5 w-3/5 rounded-lg" />
          <Skeleton className="h-4 w-3/5 rounded-lg mt-3" />
          <Skeleton className="h-4 w-3/5 rounded-lg" />
          <Skeleton className="h-4 w-3/5 rounded-lg" />
          <Skeleton className="h-16 w-3/5 rounded-lg my-3" />
          <Skeleton className="h-24 w-3/5 rounded-lg" />
        </div>
      </div>
    </>
  );
}

export default ProductDetailSkeleton;
