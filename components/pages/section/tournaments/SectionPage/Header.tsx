import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ReactElement } from "react";

interface Tournament {
  logo?: string;
  name: string;
  location: string;
  startDate: string;
  endDate: string;
  prizePool: string;
  description: string;
  status: string;
  winner?: string;
}

export default function Header({ tournament }: { tournament: Tournament }): ReactElement {
  return (
    <div className="flex flex-col items-center gap-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 p-6 rounded-xl">
      <div className="relative w-32 h-32">
        <Image
          src={tournament.logo || "/placeholder.svg"}
          alt={tournament.name}
          fill
          className="rounded-full object-cover"
        />
      </div>

      <div className="text-center space-y-4 w-full max-w-3xl">
        <h1 className="text-3xl font-bold">{tournament.name}</h1>

        <div className="flex flex-wrap justify-center gap-4">
          <Badge variant="secondary">{tournament.location}</Badge>
          <Badge variant="secondary">
            {tournament.startDate} to {tournament.endDate}
          </Badge>
          <Badge variant="secondary">Prize Pool: {tournament.prizePool}</Badge>
        </div>

        <p className="text-gray-600 dark:text-gray-300">
          {tournament.description}
        </p>

        {tournament.status === "completed" && (
          <div className="mt-4">
            <Badge className="bg-purple-600 hover:bg-purple-700">
              Winner: {tournament.winner}
            </Badge>
          </div>
        )}
      </div>
    </div>
  );
}