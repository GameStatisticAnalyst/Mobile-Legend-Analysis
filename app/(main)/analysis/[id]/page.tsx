import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Button from "@/components/ui/button";
import Avatar from "@/components/ui/avatar";
import {
  FileText,
  BarChart2,
  Video,
  ArrowLeft,
  ThumbsUp,
  MessageSquare,
  Share2,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { getAnalysisData } from "./placeholder";

export default function AnalysisDetail({ params }: { params: { id: string } }) {
  const analysis = getAnalysisData(params.id);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-6">
        {/* Back Button */}
        <div>
          <Link href="/analysis">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Analyses
            </Button>
          </Link>
        </div>

        {/* Analysis Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {analysis.tags.map((tag, index) => (
              <Badge key={index} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-3xl font-bold">{analysis.title}</h1>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                width={50}
                height={50}
                className="w-14 h-14 mx-auto rounded-full shadow-lg object-cover"
                src={analysis.author.image}
                alt={analysis.author.name}
                // fallback={analysis.author.name.substring(0, 2)}
              />
              <div className="w-full text-nowrap">
                <div className="font-medium">{analysis.author.name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {analysis.author.role}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <div>{analysis.date}</div>
              <div>{analysis.views} views</div>
              <div>{analysis.comments} comments</div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden">
          <Image
            src={analysis.image}
            alt={analysis.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Summary */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4 mt-4">
              <h2 className="text-xl font-bold">Summary</h2>
              <div className="flex gap-2 ml-auto">
                <Button variant="outline" size="sm">
                  <ThumbsUp className="w-4 h-4 mr-1" />
                  {analysis.likes}
                </Button>
                <Button variant="outline" size="sm">
                  <MessageSquare className="w-4 h-4 mr-1" />
                  {analysis.comments}
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4 mr-1" />
                  Share
                </Button>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              {analysis.summary}
            </p>
          </CardContent>
        </Card>

        {/* Analysis Content */}
        <Tabs defaultValue="analysis" className="space-y-6">
          <TabsList className="grid grid-cols-3 md:w-[400px]">
            <TabsTrigger value="analysis">
              <FileText className="w-4 h-4 mr-2" />
              Analysis
            </TabsTrigger>
            <TabsTrigger value="stats">
              <BarChart2 className="w-4 h-4 mr-2" />
              Stats
            </TabsTrigger>
            <TabsTrigger value="video">
              <Video className="w-4 h-4 mr-2" />
              Video
            </TabsTrigger>
          </TabsList>

          {/* Analysis Tab */}
          <TabsContent value="analysis" className="space-y-6">
            {analysis.content.map((section, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    {section.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Stats Tab */}
          <TabsContent value="stats">
            <Card>
              <CardHeader>
                <CardTitle>Match Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Games Played
                    </div>
                    <div className="text-2xl font-bold">
                      {analysis.stats.games}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Total Kills
                    </div>
                    <div className="text-2xl font-bold">
                      {analysis.stats.totalKills}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Average Game Time
                    </div>
                    <div className="text-2xl font-bold">
                      {analysis.stats.avgGameTime}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Most Picked Hero
                    </div>
                    <div className="text-2xl font-bold">
                      {analysis.stats.mostPickedHero}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Most Banned Hero
                    </div>
                    <div className="text-2xl font-bold">
                      {analysis.stats.mostBannedHero}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      MVP
                    </div>
                    <div className="text-2xl font-bold">
                      {analysis.stats.mvp}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Video Tab */}
          <TabsContent value="video">
            <Card>
              <CardContent className="p-6">
                <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Video className="w-12 h-12 mx-auto text-gray-400" />
                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                      Video analysis coming soon
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Related Analyses */}
        <div className="space-y-4 pt-6">
          <h2 className="text-xl font-bold">Related Analyses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {analysis.relatedAnalyses.map((related) => (
              <Link href={`/analysis/${related.id}`} key={related.id}>
                <Card className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative h-40 w-full">
                    <Image
                      src={related.image || "/placeholder.svg"}
                      alt={related.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium line-clamp-2">
                      {related.title}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
