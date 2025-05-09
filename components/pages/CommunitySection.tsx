import React from "react";
import Link from "next/link";
import { ArrowRight, BarChart3, Users } from "lucide-react";

import Button from "@/components/ui/button";
import PageLayout from "@/layout/PageLayout";

export default function CommunitySection() {
  return (
    <PageLayout>
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 space-y-6 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold">
            Bergabung dengan Komunitas
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Terhubung dengan ribuan analis dan penggemar Mobile Legends dari
            seluruh dunia.
          </p>
          <div className="grid grid-row-2 lg:grid-cols-2 gap-4 mt-6">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Pengguna
                  </p>
                  <p className="text-2xl font-bold">10,000+</p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Kontributor
                  </p>
                  <p className="text-2xl font-bold">500+</p>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-4">
            <Button
              size="lg"
              variant="default"
              // rightIcon={<ArrowRight className="h-5 w-5" />}
              className="rounded-full w-full px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            >
              <Link href="/contributors" className="flex items-center ">
                Lihat Kontributor
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="lg:w-1/2 relative animate-fade-in">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-3xl -z-10 transform -rotate-6"></div>
          <div className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-slate-200 dark:border-slate-800">
            <div className="flex flex-col space-y-4">
              <div className="col-span-2">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">
                    Bergabunglah Sekarang
                  </h3>
                  <p className="text-white/80 mb-4">
                    Dapatkan akses ke fitur premium dan komunitas eksklusif
                  </p>
                  <Button
                    variant="outline"
                    // className="rounded-full hover:bg-white/90 border border-white/20 text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4"
                  >
                    Daftar Gratis
                  </Button>
                </div>
              </div>
              <div className="grid grid-row-1 lg:grid-cols-2 lg:cols-span-2 gap-4 w-full">
                <div className="bg-blue-100 dark:bg-blue-950/30 p-4 rounded-xl w-full">
                  <h4 className="font-medium mb-2">Forum Diskusi</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Diskusikan strategi dan meta game terbaru
                  </p>
                </div>
                <div className="bg-purple-100 dark:bg-purple-950/30 p-4 rounded-xl w-full">
                  <h4 className="font-medium mb-2">AI Tools</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Analisis pertandingan menggunakan AI
                  </p>
                </div>
                <div className="bg-pink-100 dark:bg-pink-950/30 p-4 rounded-xl w-full">
                  <h4 className="font-medium mb-2">Turnamen</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Ikuti turnamen komunitas reguler
                  </p>
                </div>
                <div className="bg-amber-100 dark:bg-amber-950/30 p-4 rounded-xl w-full">
                  <h4 className="font-medium mb-2">Konten Eksklusif</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Akses analisis mendalam dan tutorial
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
