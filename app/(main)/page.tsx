"use client";

import anime from "animejs";
import Link from "next/link";
import Image from "next/image";
import { useState, ReactElement, useEffect } from "react";
import {
  BarChart3,
  Shield,
  Trophy,
  Users,
  ArrowRight,
  Search,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import { analysisData } from "./placeholderData";
import AnalysisCard from "@/components/analysis-card";
import { Card, CardContent } from "@/components/ui/card";
import AnalysisDialog from "@/components/analysis-dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Analysis {
  id: string;
  tags: string[];
  date: string;
  [key: string]: any; // Add additional properties as needed
}

export default function Home(): ReactElement {
  const [selectedAnalysis, setSelectedAnalysis] = useState<Analysis | null>(
    null
  );
  const [dialogOpen, setDialogOpen] = useState(false);
  const [sortBy, setSortBy] = useState("latest");
  const [filterTag, setFilterTag] = useState("all");

  useEffect(() => {
    anime({
      targets: ".hero-title .char",
      opacity: [0, 1],
      translateY: [50, 0],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 1200,
      delay: (el, i) => 300 + 30 * i,
    });

    // Split text into characters for animation
    const heroTitle = document.querySelector(".hero-title");
    if (heroTitle) {
      const text = heroTitle.textContent;
      heroTitle.innerHTML = "";
      text?.split("").forEach((char) => {
        const charSpan = document.createElement("span");
        charSpan.classList.add("char");
        charSpan.textContent = char === " " ? "\u00A0" : char;
        heroTitle.appendChild(charSpan);
      });
    }
  }, []);

  const handleAnalysisClick = (analysis: Analysis): void => {
    setSelectedAnalysis(analysis);
    setDialogOpen(true);
  };

  // Get unique tags from all analysis
  const allTags = [
    "all",
    ...Array.from(new Set(analysisData.flatMap((analysis) => analysis.tags))),
  ];

  // Sort and filter analysis data
  const sortedAndFilteredAnalysis = [...analysisData]
    .filter(
      (analysis) => filterTag === "all" || analysis.tags.includes(filterTag)
    )
    .sort((a, b) => {
      if (sortBy === "latest") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else if (sortBy === "oldest") {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }
      return 0;
    });

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative py-12 overflow-hidden">
        <div className="container mx-auto ">
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
        </div>
      </section>

      {/* Latest Analysis Section */}
      {/* <section className="lg:px-8 py-12 relative overflow-hidden rounded">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 -z-10"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-300/20 dark:bg-blue-600/10 rounded-full filter blur-3xl -z-10 transform translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-300/20 dark:bg-purple-600/10 rounded-full filter blur-3xl -z-10 transform -translate-x-1/4 translate-y-1/4"></div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-8 animate-fade-in">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div className="space-y-2">
                <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Analisis Terbaru
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Jelajahi analisis pertandingan Mobile Legends terbaru
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="default"
                  className="rounded-full px-3 py-1 bg-blue-600 text-white hover:bg-blue-700"
                >
                  #MPL
                </Badge>
                <Badge
                  variant="outline"
                  className="rounded-full px-3 py-1 border-gray-300 dark:border-gray-600 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Final
                </Badge>
                <Badge
                  variant="outline"
                  className="rounded-full px-3 py-1 border-gray-300 dark:border-gray-600 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  MDL
                </Badge>
                <Badge
                  variant="outline"
                  className="rounded-full px-3 py-1 border-gray-300 dark:border-gray-600 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Season 11
                </Badge>
              </div>
            </div>

            <div className="relative">
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <Input
                    placeholder="Cari analisis..."
                    className="pl-9 rounded-full border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
                  />
                </div>
                <div className="flex items-center gap-4">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="rounded-full border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2"
                  >
                    <option value="latest">Terbaru</option>
                    <option value="oldest">Terlama</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {analysisData.map((analysis) => (
                <div key={analysis.id} className="group">
                  <AnalysisCard
                    analysis={analysis}
                    onClick={handleAnalysisClick}
                  />
                  <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-600 to-purple-600 mt-1 transition-all duration-300 rounded-full"></div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <Link
                href="analysis"
                className="border flex gap-3 dark:text-gray-300 border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:ring-gray-300 rounded-full px-8 py-6 dark:border-gray-600 shadow-sm hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 bg-white dark:bg-gray-800"
              >
                <span className="mr-2">Lihat Semua Analisis</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section> */}

      {/* Features Section */}
      <section className="py-12 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-md rounded text-gray-900 dark:text-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Fitur Unggulan
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Tingkatkan pemahaman dan strategi permainan Anda dengan
              fitur-fitur analisis kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-xl overflow-hidden animate-fade-in">
              <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600"></div>
              <CardContent className="p-6 pt-5">
                <div className="h-14 w-14 rounded-xl bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
                  <BarChart3 className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Analisis Pertandingan
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Analisis mendalam untuk setiap pertandingan dengan data
                  statistik lengkap dan visualisasi interaktif.
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
        </div>
      </section>

      {/* Community Section */}
      <section className="py-12 text-gray-900 dark:text-gray-100">
        <div className="container mx-auto ">
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
                        variant="default"
                        className="rounded-full hover:bg-white/90 border border-white/20 text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4"
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
                      <h4 className="font-medium mb-2">Webinar</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Sesi belajar dengan analis profesional
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
        </div>
      </section>
      <AnalysisDialog
        analysis={selectedAnalysis}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </div>
  );
}
