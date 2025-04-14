"use client";

import { ReactElement } from "react";
import MenuLayout from "@/layout/documentation-layout";

export default function FeaturesPage(): ReactElement {
  return (
    <MenuLayout title="Menu Utama">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Cara Menggunakan ML Analysis</h1>
        <p className="text-lg">
          Panduan lengkap untuk menganalisis pertandingan Mobile Legends dan
          mendapatkan wawasan berharga
        </p>
        <p>
          ML Analysis adalah platform yang dirancang untuk membantu pemain dan
          analis esports memahami pertandingan Mobile Legends secara mendalam.
          Dengan alat analisis kami, Anda dapat mengidentifikasi pola, strategi,
          dan area yang perlu ditingkatkan.
        </p>
        {/* <ul className="list-disc pl-6 space-y-2">
          <li>Analisis pertandingan secara real-time</li>
          <li>Visualisasi data yang interaktif</li>
          <li>Prediksi hasil pertandingan menggunakan model AI</li>
        </ul> */}
      </div>
    </MenuLayout>
  );
}
