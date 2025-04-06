import Avatar from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Button from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Github,
  Twitter,
  Linkedin,
  Globe,
  Mail,
  Calendar,
  Award,
  FileText,
  Clock,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { getContributorById } from "./placeholder";

export default function ContributorPage({
  params,
}: {
  params: { id: string };
}) {
  const contributor = getContributorById(params.id);
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="relative">
            <Image
              src={contributor.image}
              alt={contributor.name.substring(0, 2)}
              height={50}
              width={50}
              className="w-40 h-40 border-4 border-white dark:border-gray-800 shadow-lg"
            />
            <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full p-2 shadow-lg">
              <Award className="h-6 w-6 text-white" />
            </div>
          </div>

          <div className="text-center md:text-left flex-1">
            <h1 className="text-3xl md:text-4xl font-bold">
              {contributor.name}
            </h1>
            <p className="text-purple-600 dark:text-purple-400 text-xl mb-3">
              {contributor.role}
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
              {contributor.specialties.map((specialty, index) => (
                <Badge key={index} variant="secondary">
                  {specialty}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-gray-600 dark:text-gray-300 mb-4">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>{contributor.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Joined {contributor.joinDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>{contributor.contributions} Contributions</span>
              </div>
            </div>

            <div className="flex justify-center md:justify-start space-x-4">
              {contributor.social.github && (
                <Link
                  href={contributor.social.github}
                  className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                >
                  <Github className="w-6 h-6" />
                </Link>
              )}
              {contributor.social.twitter && (
                <Link
                  href={contributor.social.twitter}
                  className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                >
                  <Twitter className="w-6 h-6" />
                </Link>
              )}
              {contributor.social.linkedin && (
                <Link
                  href={contributor.social.linkedin}
                  className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                >
                  <Linkedin className="w-6 h-6" />
                </Link>
              )}
              {contributor.social.website && (
                <Link
                  href={contributor.social.website}
                  className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                >
                  <Globe className="w-6 h-6" />
                </Link>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-3 min-w-[200px]">
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              Follow
            </Button>
            <Button variant="outline">Message</Button>
          </div>
        </div>
      </div>

      <Tabs defaultValue="about" className="w-full">
        <TabsList className="grid grid-cols-4 max-w-md mb-8">
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="analyses">Analyses</TabsTrigger>
          <TabsTrigger value="stats">Stats</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>

        <TabsContent value="about" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Biography</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {contributor.bio}
              </p>
            </CardContent>
          </Card>

          <div>
            <h3 className="text-xl font-bold mb-4">Featured Content</h3>
            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={contributor.featuredContent.image || "/placeholder.svg"}
                  alt={contributor.featuredContent.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-2">
                  {contributor.featuredContent.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {contributor.featuredContent.excerpt}
                </p>
                <Button>Read Full Article</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analyses" className="space-y-6">
          <h3 className="text-xl font-bold mb-4">Recent Analyses</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contributor.recentAnalyses.map((analysis) => (
              <Card
                key={analysis.id}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-40 w-full">
                  <Image
                    src={analysis.image || "/placeholder.svg"}
                    alt={analysis.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <Clock className="w-4 h-4" />
                    <span>{analysis.date}</span>
                  </div>
                  <h4 className="text-lg font-bold mb-2">{analysis.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                    {analysis.excerpt}
                  </p>
                  <Link
                    href={`/analysis/${analysis.id}`}
                    className="text-purple-600 dark:text-purple-400 text-sm font-medium hover:underline"
                  >
                    Read Analysis →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline">View All Analyses</Button>
          </div>
        </TabsContent>

        <TabsContent value="stats" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contribution Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-purple-50 dark:bg-purple-950/30 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                    {contributor.stats.analysisCount}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">Analyses</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    {contributor.stats.commentsCount}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">Comments</p>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-950/30 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                    {contributor.stats.likesReceived}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">Likes</p>
                </div>
                <div className="bg-violet-50 dark:bg-violet-950/30 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-violet-600 dark:text-violet-400">
                    {contributor.stats.viewCount.toLocaleString()}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">Views</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Activity Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center border border-dashed rounded-lg">
                <p className="text-gray-500 dark:text-gray-400">
                  Activity chart would be displayed here
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Achievements & Recognition</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {contributor.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full p-1">
                      <Award className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold">{achievement}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {index === 0 &&
                          "Recognized for exceptional analysis quality and community impact"}
                        {index === 1 &&
                          "Selected to provide expert analysis for the M5 World Championship"}
                        {index === 2 &&
                          "Voted by the community as the most helpful analyst"}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
