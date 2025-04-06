import Skeleton from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TeamDetailLoading() {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Team Header Skeleton */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 p-6 rounded-xl">
            <Skeleton className="w-32 h-32 md:w-40 md:h-40 rounded-full" />
            
            <div className="text-center md:text-left space-y-4 flex-1">
              <div className="flex flex-col md:flex-row md:items-center gap-2">
                <Skeleton className="h-10 w-48 mx-auto md:mx-0" />
                <Skeleton className="h-6 w-24 mx-auto md:mx-0 md:ml-2" />
              </div>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <Skeleton className="h-5 w-24" />
                <Skeleton className="h-5 w-24" />
                <Skeleton className="h-5 w-24" />
                <Skeleton className="h-5 w-24" />
              </div>
              
              <Skeleton className="h-16 w-full max-w-3xl" />
            </div>
          </div>
          
          {/* Tabs Skeleton */}
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid grid-cols-4 md:w-[400px]">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="players">Players</TabsTrigger>
              <TabsTrigger value="matches">Matches</TabsTrigger>
              <TabsTrigger value="stats">Stats</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6">
              {/* Achievements Skeleton */}
              <Card>
                <CardHeader>
                  <Skeleton className="h-7 w-40" />
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Array(4).fill(0).map((_, i) => (
                      <Skeleton key={i} className="h-14 w-full" />
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Players Skeleton */}
              <Card>
                <CardHeader>
                  <Skeleton className="h-7 w-40" />
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {Array(5).fill(0).map((_, i) => (
                      <div key={i} className="flex flex-col items-center p-4 rounded-lg">
                        <Skeleton className="w-16 h-16 rounded-full mb-3" />
                        <Skeleton className="h-5 w-20" />
                        <Skeleton className="h-5 w-16 mt-1" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Matches Skeleton */}
              <Card>
                <CardHeader>
                  <Skeleton className="h-7 w-40" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Array(3).fill(0).map((_, i) => (
                      <Skeleton key={i} className="h-16 w-full" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  )
}
