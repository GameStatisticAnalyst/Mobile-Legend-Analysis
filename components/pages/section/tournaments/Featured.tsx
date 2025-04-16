import React,{ ReactElement } from "react";
import Image from "next/image";

import { Calendar, MapPin } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import Button from "@/components/ui/button";

export default function Featured(): ReactElement{
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-purple-600/50 opacity-90"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1200')] bg-cover bg-center mix-blend-overlay"></div>

          <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 md:w-40 md:h-40 bg-white/20 backdrop-blur-sm rounded-2xl p-4 flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=120&width=120"
                alt="M5 World Championship"
                width={120}
                height={120}
                className="rounded-lg"
              />
            </div>

            <div className="flex-1 text-white text-center md:text-left">
              <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-3">
                <Badge
                  variant="default"
                  className="bg-white/20 text-white hover:bg-white/30"
                >
                  World Championship
                </Badge>
                <Badge
                  variant="default"
                  className="bg-white/20 text-white hover:bg-white/30"
                >
                  16 Teams
                </Badge>
                <Badge
                  variant="default"
                  className="bg-white/20 text-white hover:bg-white/30"
                >
                  $800,000 Prize Pool
                </Badge>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                M5 World Championship
              </h2>
              <p className="text-white/80 mb-4">
                The fifth Mobile Legends World Championship featuring the best
                teams from around the world competing for the ultimate title.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>Dec 1 - Dec 15, 2024</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>Singapore</span>
                </div>
              </div>
              <div className="mt-6">
                <Button variant="default" className=" hover:bg-white/90">
                  View Details
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}