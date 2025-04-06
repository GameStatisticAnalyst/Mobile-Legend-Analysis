import { Card, CardContent } from "@/components/ui/card";
import Avatar from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Github, Twitter, Linkedin, Globe } from "lucide-react";
import Link from "next/link";

import { contributors } from "./placeholder";
import Image from "next/image";

export default function ContributorsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Contributors</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Meet the talented analysts, coaches, and content creators who make our
          Mobile Legends analysis platform possible.
        </p>
      </div>

      {/* Featured Contributors */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Featured Contributors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contributors.slice(0, 3).map((contributor) => (
            <Card
              key={contributor.id}
              className="overflow-hidden bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/30 dark:to-blue-950/30 border-0 shadow-md"
            >
              <div className="p-6 text-center">
                <Avatar
                  className="w-32 h-32 mx-auto mb-4 border-4 border-white dark:border-gray-800 shadow-lg"
                  src={contributor.image}
                  alt={contributor.name}
                  fallback={contributor.name.substring(0, 2)}
                />
                <h3 className="text-2xl font-bold mb-1">{contributor.name}</h3>
                <p className="text-purple-600 dark:text-purple-400 font-medium mb-3">
                  {contributor.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {contributor.bio}
                </p>

                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {contributor.specialties.map((specialty, index) => (
                    <Badge key={index} variant="secondary">
                      {specialty}
                    </Badge>
                  ))}
                </div>

                <div className="flex justify-center space-x-3 mt-4">
                  {contributor.social.github && (
                    <Link
                      href={contributor.social.github}
                      className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                    >
                      <Github className="w-5 h-5" />
                    </Link>
                  )}
                  {contributor.social.twitter && (
                    <Link
                      href={contributor.social.twitter}
                      className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                    >
                      <Twitter className="w-5 h-5" />
                    </Link>
                  )}
                  {contributor.social.linkedin && (
                    <Link
                      href={contributor.social.linkedin}
                      className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                    >
                      <Linkedin className="w-5 h-5" />
                    </Link>
                  )}
                  {contributor.social.website && (
                    <Link
                      href={contributor.social.website}
                      className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                    >
                      <Globe className="w-5 h-5" />
                    </Link>
                  )}
                </div>
              </div>
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-3 px-6">
                <div className="text-white text-center">
                  <span className="font-bold">{contributor.contributions}</span>{" "}
                  Contributions
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* All Contributors */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-center">
          All Contributors
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contributors.map((contributor) => (
            <Card
              key={contributor.id}
              // className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-start mt-4">
                    <div className="flex gap-3 items-center mb-2">
                      <Image
                        className="w-12 h-12 rounded-full"
                        src="/images/profile.jpg"
                        alt={contributor.name}
                        width={64}
                        height={64}
                        // fallback={contributor.name.substring(0, 2)}
                      />
                      <div className="flex flex-col">
                        <h3 className="text-lg font-bold">
                          {contributor.name}
                        </h3>
                        <p className="text-purple-600 dark:text-purple-400 text-sm mb-2">
                          {contributor.role}
                        </p>
                      </div>
                    </div>
                    {/* Bio */}
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
                      {contributor.bio}
                    </p>
                    {/* Specialities */}
                    <div className="flex flex-wrap gap-1 mb-2">
                      {contributor.specialties
                        .slice(0, 2)
                        .map((specialty, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="text-xs"
                          >
                            {specialty}
                          </Badge>
                        ))}
                      {contributor.specialties.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{contributor.specialties.length - 2}
                        </Badge>
                      )}
                    </div>
                    {/* Media Socila */}
                    <div className="flex space-x-2 mt-2">
                      {contributor.social.github && (
                        <Link
                          href={contributor.social.github}
                          className="text-gray-500 hover:text-purple-600 dark:hover:text-purple-400"
                        >
                          <Github className="w-4 h-4" />
                        </Link>
                      )}
                      {contributor.social.twitter && (
                        <Link
                          href={contributor.social.twitter}
                          className="text-gray-500 hover:text-purple-600 dark:hover:text-purple-400"
                        >
                          <Twitter className="w-4 h-4" />
                        </Link>
                      )}
                      {contributor.social.linkedin && (
                        <Link
                          href={contributor.social.linkedin}
                          className="text-gray-500 hover:text-purple-600 dark:hover:text-purple-400"
                        >
                          <Linkedin className="w-4 h-4" />
                        </Link>
                      )}
                      {contributor.social.website && (
                        <Link
                          href={contributor.social.website}
                          className="text-gray-500 hover:text-purple-600 dark:hover:text-purple-400"
                        >
                          <Globe className="w-4 h-4" />
                        </Link>
                      )}
                    </div>
                </div>
                <div className="mt-4 pt-4 border-t flex justify-between items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-bold text-gray-700 dark:text-gray-200">
                      {contributor.contributions}
                    </span>{" "}
                    Contributions
                  </span>
                  <Link
                    href={`/contributors/${contributor.id}`}
                    className="text-sm text-purple-600 dark:text-purple-400 hover:underline"
                  >
                    View Profile
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Join Us Section */}
      <div className="mt-16 text-center bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-950/50 dark:to-blue-950/50 p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">Want to Contribute?</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          We're always looking for passionate Mobile Legends players, coaches,
          and analysts to join our team of contributors.
        </p>
        <Link
          href="/contributors/register"
          className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 text-white font-medium hover:from-purple-700 hover:to-blue-700 transition-colors"
        >
          Apply to Join
        </Link>
      </div>
    </div>
  );
}
