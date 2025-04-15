"use client";

import { ReactElement } from "react";

import MenuLayout from "@/layout/documentation-layout";

export default function GuidePage(): ReactElement {
  return <MenuLayout title="Features">
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Fitur Utama</h1>
      <p className="text-lg">
        MLAnalysis menyediakan berbagai fitur untuk membantu Anda menganalisis
        pertandingan Mobile Legends secara mendalam.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Analisis pertandingan secara real-time</li>
        <li>Visualisasi data yang interaktif</li>
        <li>Prediksi hasil pertandingan menggunakan model AI</li>
      </ul>
    </div>
  </MenuLayout>;
}
