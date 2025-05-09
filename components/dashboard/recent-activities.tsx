import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Activity } from "@/types/admin";

interface RecentActivityProps {
  activities: Activity[];
}

export default function RecentActivity({
  activities,
}: RecentActivityProps): JSX.Element {
  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest actions from users</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 ">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-4">
              <Avatar className="h-9 w-9">
                <AvatarImage
                  src={activity.userAvatar}
                  alt={activity.userName}
                />
                <AvatarFallback>
                  {activity.userName.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {activity.userName}
                </p>
                <p className="text-sm text-muted-foreground">
                  {activity.action}
                </p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
