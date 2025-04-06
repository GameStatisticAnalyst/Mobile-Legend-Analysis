"use client";

import cn from "@/utils/cn";
import { Check, Info, X } from "lucide-react";
import type { ReactNode } from "react";

export type NotificationType = "info" | "success" | "warning" | "error";

export interface NotificationItemProps {
  id: string;
  title: string;
  message: string;
  time: string;
  type: NotificationType;
  read: boolean;
  onMarkAsRead: (id: string) => void;
}

export function NotificationItem({
  id,
  title,
  message,
  time,
  type,
  read,
  onMarkAsRead,
}: NotificationItemProps) {
  const icons: Record<NotificationType, ReactNode> = {
    info: <Info className="h-4 w-4 text-blue-500" />,
    success: <Check className="h-4 w-4 text-green-500" />,
    warning: <Info className="h-4 w-4 text-amber-500" />,
    error: <X className="h-4 w-4 text-red-500" />,
  };

  const bgColors: Record<NotificationType, string> = {
    info: "bg-blue-50 dark:bg-blue-950/30",
    success: "bg-green-50 dark:bg-green-950/30",
    warning: "bg-amber-50 dark:bg-amber-950/30",
    error: "bg-red-50 dark:bg-red-950/30",
  };

  return (
    <div
      className={cn(
        "p-4 rounded-lg mb-2 transition-all",
        read ? "opacity-70" : bgColors[type]
      )}
    >
      <div className="flex items-start gap-3">
        <div
          className={cn(
            "mt-1 p-1.5 rounded-full",
            type === "info" && "bg-blue-100 dark:bg-blue-900",
            type === "success" && "bg-green-100 dark:bg-green-900",
            type === "warning" && "bg-amber-100 dark:bg-amber-900",
            type === "error" && "bg-red-100 dark:bg-red-900"
          )}
        >
          {icons[type]}
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h4 className="font-medium text-sm">{title}</h4>
            <span className="text-xs text-muted-foreground">{time}</span>
          </div>
          <p className="text-sm text-muted-foreground mt-1">{message}</p>
          {!read && (
            <button
              onClick={() => onMarkAsRead(id)}
              className="text-xs font-medium text-primary mt-2 hover:underline"
            >
              Mark as read
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
