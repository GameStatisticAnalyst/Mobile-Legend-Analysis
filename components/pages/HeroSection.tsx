import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, Shield, Trophy } from "lucide-react";

import Button from "@/components/ui/button";
import PageLayout from "@/layout/PageLayout";

export default function HeroSection(){
  return (
    <PageLayout>
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Analisis Mobile Legends Profesional
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Platform analisis pertandingan Mobile Legends terlengkap untuk
            pemain dan tim esports profesional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              className="rounded-full px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            >
              Mulai Sekarang
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link href="/guides">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full w-full  px-8 py-6 border-slate-200 dark:border-slate-700"
              >
                Pelajari Lebih Lanjut
              </Button>
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 relative animate-fade-in hidden lg:block">
          {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-3xl -z-10 transform rotate-6"></div> */}
          <div className="relative bg-gray-100 dark:bg-gray-900 backdrop-blur-md rounded-3xl p-6 shadow-lg outline outline-gray-300 dark:outline-gray-700">
            <div className="aspect-video relative overflow-hidden rounded-xl">
              <Image
                src="/placeholder/mobilelegend.png"
                alt="Mobile Legends Analysis"
                width={500}
                height={300}
                className="object-cover w-full h-full transition-transform duration-300 transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold">
                    Mobile Legend Tournament 2025
                  </h3>
                  <p className="text-white/80">Comming Soon!</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="bg-blue-100 dark:bg-blue-950/30 p-4 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <BarChart3 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Analisis
                    </p>
                    <p className="font-bold">2,345+</p>
                  </div>
                </div>
              </div>
              <div className="bg-purple-100 dark:bg-purple-950/30 p-4 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600 dark:text-purple-400">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Tim
                    </p>
                    <p className="font-bold">56+</p>
                  </div>
                </div>
              </div>
              <div className="bg-pink-100 dark:bg-pink-950/30 p-4 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-pink-100 dark:bg-pink-900 flex items-center justify-center text-pink-600 dark:text-pink-400">
                    <Trophy className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Turnamen
                    </p>
                    <p className="font-bold">24+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}