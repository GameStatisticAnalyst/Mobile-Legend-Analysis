"use client";

import { ReactElement, ReactNode } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart3,
  FileText,
  Search,
  Shield,
  Users,
  Zap,
  CheckCircle2,
  AlertCircle,
  BookOpen,
  Lightbulb,
} from "lucide-react";

import MenuLayout from "@/layout/documentation-layout";

export default function GuidePage(): ReactElement {
  return (
    <MenuLayout title="Selamat Datang!">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="w-full h-full">
          <CardContent className="flex flex-col items-center justify-center space-y-4">
            <BarChart3 size={40} className="text-blue-500" />
            <h2 className="text-xl font-bold">Analisis Pertandingan</h2>
            <p className="text-gray-600">
              Analisis pertandingan secara real-time
            </p>
          </CardContent>
        </Card>
        <Card className="w-full h-full">
          <CardContent className="flex flex-col items-center justify-center space-y-4">
            <Zap size={40} className="text-green-500" />
            <h2 className="text-xl font-bold">Prediksi AI</h2>
            <p className="text-gray-600">
              Prediksi hasil pertandingan menggunakan model AI
            </p>
          </CardContent>
        </Card>
        <Card className="w-full h-full">
          <CardContent className="flex flex-col items-center justify-center space-y-4">
            <Users size={40} className="text-purple-500" />
            <h2 className="text-xl font-bold">Komunitas</h2>
            <p className="text-gray-600">
              Bergabunglah dengan komunitas kami untuk berbagi tips dan trik
            </p>
          </CardContent>
        </Card>
        <Card className="w-full h-full">
          <CardContent className="flex flex-col items-center justify-center space-y-4">
            <CheckCircle2 size={40} className="text-yellow-500" />
            <h2 className="text-xl font-bold">Tutorial</h2>
            <p className="text-gray-600">
              Ikuti tutorial untuk mempelajari cara menggunakan MLAnalysis
            </p>
          </CardContent>
        </Card>
        <Card className="w-full h-full">
          <CardContent className="flex flex-col items-center justify-center space-y-4">
            <AlertCircle size={40} className="text-red-500" />
            <h2 className="text-xl font-bold">Laporan Masalah</h2>
            <p className="text-gray-600">
              Laporkan masalah atau bug yang Anda temui
            </p>
          </CardContent>
        </Card>
        <Card className="w-full h-full">
          <CardContent className="flex flex-col items-center justify-center space-y-4">
            <Lightbulb size={40} className="text-orange-500" />
            <h2 className="text-xl font-bold">Tips & Trik</h2>
            <p className="text-gray-600">
              Dapatkan tips dan trik untuk meningkatkan permainan Anda
            </p>
          </CardContent>
        </Card>
      </div>
    </MenuLayout>
  );
}
