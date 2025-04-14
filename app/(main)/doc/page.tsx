"use client";

import type React from "react";
import MenuLayout from "@/layout/menu-layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import {
  ArrowRight,
  Code,
  Database,
  LineChart,
  Users,
  Zap,
  Server,
} from "lucide-react";
import Button from "@/components/ui/button";
import { useEffect, useState } from "react";

interface NavItem {
  title: string;
  href?: string;
  icon?: React.ReactNode;
  label?: string;
  description?: string;
  disabled?: boolean;
  external?: boolean;
  items?: NavItem[];
}

const navigationConfig: NavItem[] = [
  {
    title: "Pengantar",
    items: [
      {
        title: "Tentang MLAnalysis",
        href: "/docs/tentang",
      },
      {
        title: "Memulai",
        href: "/docs/memulai",
      },
      {
        title: "Fitur Utama",
        href: "/docs/fitur-utama",
      },
    ],
  },
  {
    title: "Panduan Dasar",
    items: [
      {
        title: "Instalasi",
        href: "/docs/instalasi",
      },
      {
        title: "Struktur Proyek",
        href: "/docs/struktur-proyek",
      },
      {
        title: "Konfigurasi",
        href: "/docs/konfigurasi",
      },
    ],
  },
  {
    title: "Analisis Data",
    items: [
      {
        title: "Mengimpor Data",
        href: "/docs/mengimpor-data",
      },
      {
        title: "Preprocessing",
        href: "/docs/preprocessing",
      },
      {
        title: "Visualisasi",
        href: "/docs/visualisasi",
      },
      {
        title: "Model Prediktif",
        href: "/docs/model-prediktif",
        items: [
          {
            title: "Klasifikasi",
            href: "/docs/model-prediktif/klasifikasi",
          },
          {
            title: "Regresi",
            href: "/docs/model-prediktif/regresi",
          },
          {
            title: "Clustering",
            href: "/docs/model-prediktif/clustering",
          },
        ],
      },
      {
        title: "Evaluasi Model",
        href: "/docs/evaluasi-model",
      },
    ],
  },
  {
    title: "API Reference",
    items: [
      {
        title: "Endpoints",
        href: "/docs/api/endpoints",
      },
      {
        title: "Autentikasi",
        href: "/docs/api/autentikasi",
      },
      {
        title: "Rate Limits",
        href: "/docs/api/rate-limits",
      },
    ],
  },
  {
    title: "Integrasi",
    items: [
      {
        title: "Database",
        href: "/docs/integrasi/database",
      },
      {
        title: "Layanan Cloud",
        href: "/docs/integrasi/cloud",
      },
      {
        title: "Tools Eksternal",
        href: "/docs/integrasi/tools",
      },
    ],
  },
  {
    title: "Panduan Lanjutan",
    items: [
      {
        title: "Optimasi Performa",
        href: "/docs/lanjutan/optimasi",
      },
      {
        title: "Keamanan",
        href: "/docs/lanjutan/keamanan",
      },
      {
        title: "Deployment",
        href: "/docs/lanjutan/deployment",
      },
    ],
  },
  {
    title: "Kontribusi",
    items: [
      {
        title: "Panduan Kontribusi",
        href: "/docs/kontribusi",
      },
      {
        title: "Kode Etik",
        href: "/docs/kode-etik",
      },
      {
        title: "Melaporkan Bug",
        href: "/docs/melaporkan-bug",
      },
    ],
  },
];

interface TocItem {
  title: string;
  url: string;
  level: number; // Tambahkan level untuk heading (h1, h2, h3, dll.)
  items?: TocItem[]; // Sub-items untuk heading
}

export default function DocsPage() {
  const [toc, setToc] = useState<TocItem[]>([]);

  useEffect(() => {
    // Cari semua elemen heading (h1, h2, h3, dll.)
    const headings = Array.from(
      document.querySelectorAll("h1, h2, h3, h4, h5, h6")
    );

    // Buat TOC berdasarkan heading
    const tocItems: TocItem[] = [];
    const stack: TocItem[] = [];

    headings.forEach((heading) => {
      const level = parseInt(heading.tagName.replace("H", ""), 10); // Dapatkan level heading
      const item: TocItem = {
        title: heading.textContent || "Untitled",
        url: `#${heading.id}`,
        level,
        items: [],
      };

      // Jika stack kosong atau level lebih besar, tambahkan sebagai sub-item
      while (stack.length > 0 && stack[stack.length - 1].level >= level) {
        stack.pop();
      }

      if (stack.length === 0) {
        tocItems.push(item); // Tambahkan ke root TOC
      } else {
        stack[stack.length - 1].items!.push(item); // Tambahkan sebagai sub-item
      }

      stack.push(item); // Tambahkan ke stack
    });

    setToc(tocItems);
  }, []);

  return (
    <MenuLayout
      navigation={navigationConfig}
      title="Dokumentasi MLAnalysis"
      breadcrumbs={[
        { title: "Beranda", href: "/" },
        { title: "Dokumentasi", href: "/docs" },
      ]}
      toc={toc}
    >

      <section id="pengantar" className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Pengantar
        </h2>
        <p className="text-lg text-muted-foreground">
          Selamat datang di dokumentasi MLAnalysis. Platform analisis data dan
          machine learning yang dirancang untuk memudahkan proses analisis data,
          pemodelan prediktif, dan visualisasi hasil.
        </p>
        <p className="text-muted-foreground">
          MLAnalysis menyediakan berbagai alat dan fitur yang memungkinkan Anda
          untuk mengeksplorasi, menganalisis, dan memvisualisasikan data dengan
          mudah. Platform ini dirancang untuk peneliti, data scientist, analis
          bisnis, dan siapa saja yang ingin mendapatkan wawasan dari data
          mereka.
        </p>
      </section>

      <section id="fitur-utama" className="mt-10 space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Fitur Utama
        </h2>
        <p className="text-muted-foreground">
          MLAnalysis menyediakan berbagai fitur yang memudahkan proses analisis
          data dan machine learning:
        </p>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-6">
          <Card>
            <CardHeader className="pb-2">
              <Database className="h-5 w-5 text-primary mb-2" />
              <CardTitle>Pengelolaan Data</CardTitle>
              <CardDescription>
                Impor, bersihkan, dan transformasi data dengan mudah
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link
                href="/docs/mengimpor-data"
                className="inline-flex items-center text-sm text-primary hover:underline"
              >
                Pelajari lebih lanjut <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <LineChart className="h-5 w-5 text-primary mb-2" />
              <CardTitle>Visualisasi Data</CardTitle>
              <CardDescription>
                Buat visualisasi interaktif dan informatif
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link
                href="/docs/visualisasi"
                className="inline-flex items-center text-sm text-primary hover:underline"
              >
                Pelajari lebih lanjut <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <Zap className="h-5 w-5 text-primary mb-2" />
              <CardTitle>Model Prediktif</CardTitle>
              <CardDescription>
                Bangun dan evaluasi model machine learning
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link
                href="/docs/model-prediktif"
                className="inline-flex items-center text-sm text-primary hover:underline"
              >
                Pelajari lebih lanjut <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <Users className="h-5 w-5 text-primary mb-2" />
              <CardTitle>Kolaborasi Tim</CardTitle>
              <CardDescription>
                Bekerja sama dengan tim dalam proyek analisis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link
                href="/docs/kolaborasi-tim"
                className="inline-flex items-center text-sm text-primary hover:underline"
              >
                Pelajari lebih lanjut <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <Code className="h-5 w-5 text-primary mb-2" />
              <CardTitle>API</CardTitle>
              <CardDescription>
                Integrasikan MLAnalysis dengan aplikasi Anda
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link
                href="/docs/api/endpoints"
                className="inline-flex items-center text-sm text-primary hover:underline"
              >
                Pelajari lebih lanjut <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <Server className="h-5 w-5 text-primary mb-2" />
              <CardTitle>Deployment</CardTitle>
              <CardDescription>
                Deploy model ke produksi dengan mudah
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link
                href="/docs/lanjutan/deployment"
                className="inline-flex items-center text-sm text-primary hover:underline"
              >
                Pelajari lebih lanjut <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="memulai" className="mt-10 space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Memulai
        </h2>
        <p className="text-muted-foreground">
          Mulai menggunakan MLAnalysis dengan mengikuti panduan langkah demi
          langkah berikut:
        </p>

        <div className="space-y-4 mt-6">
          <div className="flex items-start space-x-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border bg-muted text-foreground">
              1
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-medium">Instalasi</h3>
              <p className="text-muted-foreground">
                Pelajari cara menginstal dan mengkonfigurasi MLAnalysis di
                lingkungan Anda.
              </p>
              <Button variant="link" className="p-0 h-auto" asChild>
                <Link href="/docs/instalasi">Lihat panduan instalasi</Link>
              </Button>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border bg-muted text-foreground">
              2
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-medium">Mengimpor Data</h3>
              <p className="text-muted-foreground">
                Pelajari cara mengimpor dan mempersiapkan data untuk analisis.
              </p>
              <Button variant="link" className="p-0 h-auto" asChild>
                <Link href="/docs/mengimpor-data">
                  Lihat panduan impor data
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border bg-muted text-foreground">
              3
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-medium">Membuat Visualisasi</h3>
              <p className="text-muted-foreground">
                Pelajari cara membuat visualisasi data yang informatif dan
                interaktif.
              </p>
              <Button variant="link" className="p-0 h-auto" asChild>
                <Link href="/docs/visualisasi">Lihat panduan visualisasi</Link>
              </Button>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border bg-muted text-foreground">
              4
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-medium">Membangun Model</h3>
              <p className="text-muted-foreground">
                Pelajari cara membangun dan mengevaluasi model machine learning.
              </p>
              <Button variant="link" className="p-0 h-auto" asChild>
                <Link href="/docs/model-prediktif">
                  Lihat panduan pemodelan
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="kontribusi" className="mt-10 space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Kontribusi
        </h2>
        <p className="text-muted-foreground">
          MLAnalysis adalah proyek open source dan kami menyambut kontribusi
          dari komunitas. Jika Anda ingin berkontribusi, silakan kunjungi
          repositori GitHub kami dan baca panduan kontribusi.
        </p>
        <div className="flex space-x-4 mt-4">
          <Button asChild>
            <Link
              href="https://github.com/mlanalysis"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub Repository
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/docs/kontribusi">Panduan Kontribusi</Link>
          </Button>
        </div>
      </section>
    </MenuLayout>
  );
}

function Github(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}
