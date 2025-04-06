import Skeleton from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function ApplyLoading() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Skeleton */}
      <div className="text-center mb-10">
        <Skeleton className="h-10 w-3/4 max-w-lg mx-auto mb-4" />
        <Skeleton className="h-6 w-2/3 max-w-md mx-auto" />
      </div>

      {/* Progress Skeleton */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="flex justify-between">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="text-center">
              <Skeleton className="w-10 h-10 rounded-full mx-auto mb-2" />
              <Skeleton className="h-4 w-16 mx-auto" />
            </div>
          ))}
        </div>
        <Skeleton className="h-1 w-full mt-2" />
      </div>

      {/* Form Skeleton */}
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <Skeleton className="h-8 w-64 mb-2" />
          <Skeleton className="h-4 w-48" />
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-2">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-10 w-full" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-40" />
              <Skeleton className="h-10 w-full" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-36" />
              <Skeleton className="h-32 w-full" />
            </div>
            <div className="flex justify-end">
              <Skeleton className="h-10 w-32" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
