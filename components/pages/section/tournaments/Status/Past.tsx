import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Trophy, Users, Clock } from "lucide-react";
import { ReactElement } from "react";

import { PastTournament } from "../placeholderData";

interface PastProps {
  title?: string;
  tournaments: PastTournament[];
}

export default function Past({ title, tournaments }: PastProps): ReactElement {
  return (
    <>
      {title && (
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <div className="h-2 w-2 rounded-full bg-gray-500 mr-2"></div>
          {title}
        </h2>
      )}
      {tournaments.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-6">
          {tournaments.slice(0, 4).map((tournament) => (
            <Link href={`/tournaments/${tournament.id}`} key={tournament.id}>
              <Card className="border-gray-200 dark:border-gray-700 bg-gray-200 dark:bg-gray-800 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer h-full">
                <CardContent>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 p-2">
                      <Image
                        src={tournament.logo || "/placeholder.svg"}
                        alt={tournament.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{tournament.name}</h3>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <MapPin className="h-3 w-3 mr-1" />
                        {tournament.location}
                      </div>
                    </div>
                    <Badge className="ml-auto bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                      Completed
                    </Badge>
                  </div>

                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded-lg text-center">
                      <div className="text-gray-500 dark:text-gray-400 flex justify-center mb-1">
                        <Calendar className="h-4 w-4" />
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Dates
                      </div>
                      <div className="text-sm font-medium">
                        {new Date(tournament.startDate).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            day: "numeric",
                          }
                        )}{" "}
                        -{" "}
                        {new Date(tournament.endDate).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            day: "numeric",
                          }
                        )}
                      </div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded-lg text-center">
                      <div className="text-gray-500 dark:text-gray-400 flex justify-center mb-1">
                        <Trophy className="h-4 w-4" />
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Winner
                      </div>
                      <div className="text-sm font-medium">
                        {tournament.winner}
                      </div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded-lg text-center">
                      <div className="text-gray-500 dark:text-gray-400 flex justify-center mb-1">
                        <Users className="h-4 w-4" />
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Teams
                      </div>
                      <div className="text-sm font-medium">
                        {tournament.teams}
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-4">
                    {tournament.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {tournament.type}
                    </Badge>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Prize Pool: {tournament.prizePool}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-64">
          <p className="text-gray-500 dark:text-gray-400">
            No past tournaments available at the moment. Please check back
            later!
          </p>
        </div>
      )}
    </>
  );
}
