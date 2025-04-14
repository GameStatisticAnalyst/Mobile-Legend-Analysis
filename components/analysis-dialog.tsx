"use client";

import {
  AlertDialog,
  AlertDialogClose,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import ScrollArea from "@/components/ui/scroll-area";
import Button from "@/components/ui/button";
import Image from "next/image";
import { MatchLogTable } from "./match-log-table";
import { X } from "lucide-react";

export default function AnalysisDialog({ analysis, open, onOpenChange }) {
  if (!analysis) return null;

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="sm:max-w-[900px]">
        <div className="absolute top-2 right-2">
          <Button
            onClick={() => onOpenChange(false)}
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full"
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
        <AlertDialogHeader>
          <AlertDialogTitle>Match Analysis</AlertDialogTitle>
        </AlertDialogHeader>
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <Image
                  src={analysis.teamA.logo || "/placeholder.svg"}
                  alt={analysis.teamA.name}
                  width={60}
                  height={60}
                  className="rounded-full mb-2 w-14 h-14"
                />
                <p className="text-sm font-medium truncate">{analysis.teamA.name}</p>
              </div>
              <div className="text-2xl font-bold">VS</div>
              <div className="text-center">
                <Image
                  src={analysis.teamB.logo || "/placeholder.svg"}
                  alt={analysis.teamB.name}
                  width={60}
                  height={60}
                  className="rounded-full mb-2 w-14 h-14"
                />
                <p className="text-sm font-medium truncate">{analysis.teamB.name}</p>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              {new Date(analysis.date).toLocaleDateString()}
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Description</h3>
            <p className="text-sm text-muted-foreground">
              {analysis.description}
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Match Log</h3>
            <ScrollArea className="h-[400px] rounded-md border">
              <MatchLogTable logs={analysis.logs} />
            </ScrollArea>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
