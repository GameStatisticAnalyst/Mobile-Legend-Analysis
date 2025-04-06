import Skeleton from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export default function ContributorsLoading() {
  return (
      <div className="container mx-auto px-4 py-8">
        {/* Header Skeleton */}
        <div className="text-center mb-12">
          <Skeleton className="h-10 w-64 mx-auto mb-4" />
          <Skeleton className="h-6 w-full max-w-3xl mx-auto" />
        </div>

        {/* Featured Contributors Skeleton */}
        <div className="mb-16">
          <Skeleton className="h-8 w-48 mx-auto mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <Card key={i} className="overflow-hidden">
                  <div className="p-6 text-center">
                    <Skeleton className="w-32 h-32 mx-auto rounded-full mb-4" />
                    <Skeleton className="h-7 w-48 mx-auto mb-1" />
                    <Skeleton className="h-5 w-32 mx-auto mb-3" />
                    <Skeleton className="h-20 w-full mb-4" />

                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                      <Skeleton className="h-6 w-24" />
                      <Skeleton className="h-6 w-24" />
                      <Skeleton className="h-6 w-24" />
                    </div>

                    <div className="flex justify-center space-x-3 mt-4">
                      <Skeleton className="w-5 h-5 rounded-full" />
                      <Skeleton className="w-5 h-5 rounded-full" />
                      <Skeleton className="w-5 h-5 rounded-full" />
                    </div>
                  </div>
                  <div className="py-3 px-6">
                    <Skeleton className="h-6 w-32 mx-auto" />
                  </div>
                </Card>
              ))}
          </div>
        </div>

        {/* All Contributors Skeleton */}
        <div>
          <Skeleton className="h-8 w-48 mx-auto mb-6" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <Card key={i} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Skeleton className="w-16 h-16 rounded-full" />
                      <div className="flex-1">
                        <Skeleton className="h-6 w-32 mb-2" />
                        <Skeleton className="h-4 w-24 mb-2" />
                        <Skeleton className="h-12 w-full mb-3" />

                        <div className="flex flex-wrap gap-1 mb-2">
                          <Skeleton className="h-5 w-16" />
                          <Skeleton className="h-5 w-16" />
                        </div>

                        <div className="flex space-x-2 mt-2">
                          <Skeleton className="w-4 h-4 rounded-full" />
                          <Skeleton className="w-4 h-4 rounded-full" />
                          <Skeleton className="w-4 h-4 rounded-full" />
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t flex justify-between items-center">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        {/* Join Us Section Skeleton */}
        <div className="mt-16 text-center p-8 rounded-xl">
          <Skeleton className="h-8 w-64 mx-auto mb-4" />
          <Skeleton className="h-6 w-full max-w-2xl mx-auto mb-6" />
          <Skeleton className="h-12 w-32 mx-auto" />
        </div>
      </div>
  );
}
