import React from "react";
import { BarChart3, Shield, Trophy } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import PageLayout from "@/layout/PageLayout";

export default function FeaturesSection() {
  return (
    <PageLayout>
      <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Fitur Unggulan</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Tingkatkan pemahaman dan strategi permainan Anda dengan fitur-fitur
          analisis kami
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="border-0 shadow-lg bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-xl overflow-hidden animate-fade-in">
          <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600"></div>
          <CardContent className="p-6 pt-5">
            <div className="h-14 w-14 rounded-xl bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
              <BarChart3 className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold mb-2">Analisis Pertandingan</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Analisis mendalam untuk setiap pertandingan dengan data statistik
              lengkap dan visualisasi interaktif.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-xl overflow-hidden animate-fade-in">
          <div className="h-2 bg-gradient-to-r from-purple-500 to-purple-600"></div>
          <CardContent className="p-6 pt-5">
            <div className="h-14 w-14 rounded-xl bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6">
              <Shield className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold mb-2">Profil Tim & Pemain</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Informasi lengkap tentang tim dan pemain profesional, termasuk
              statistik, hero pool, dan performa.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-xl overflow-hidden animate-fade-in">
          <div className="h-2 bg-gradient-to-r from-pink-500 to-pink-600"></div>
          <CardContent className="p-6 pt-5">
            <div className="h-14 w-14 rounded-xl bg-pink-100 dark:bg-pink-900 flex items-center justify-center text-pink-600 dark:text-pink-400 mb-6">
              <Trophy className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold mb-2">Turnamen & Kompetisi</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Jadwal, hasil, dan analisis turnamen dari seluruh dunia dengan
              prediksi berbasis data.
            </p>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
}
