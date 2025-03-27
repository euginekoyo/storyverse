import { Skeleton } from "@/components/ui/skeleton"
import { Card } from "@/components/ui/card"

export default function StoryLoading() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="flex justify-between items-center mb-6">
        <Skeleton className="h-10 w-10 rounded-full" />
        <Skeleton className="h-8 w-48" />
        <div className="flex gap-2">
          <Skeleton className="h-10 w-10 rounded-full" />
          <Skeleton className="h-10 w-10 rounded-full" />
        </div>
      </div>

      <Skeleton className="h-4 w-full mb-6" />

      <Card className="bg-slate-800 border-slate-700 mb-8">
        <Skeleton className="h-64 w-full rounded-t-lg" />
        <div className="p-6">
          <Skeleton className="h-8 w-3/4 mb-4" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-3/4 mb-8" />

          <Skeleton className="h-6 w-48 mb-4" />
          <Skeleton className="h-12 w-full mb-3" />
          <Skeleton className="h-12 w-full mb-3" />
          <Skeleton className="h-12 w-full" />
        </div>
      </Card>
    </div>
  )
}

